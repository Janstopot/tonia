import { FormEvent, useEffect, useState } from "react";
import { Necklace } from "@/assets/interfaces";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import {collection,deleteDoc,doc,getDocs,getFirestore,setDoc} from "firebase/firestore";
import styles from "../Admin.module.scss";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";

function NecklacesAdmin() {
  // ESTADOS DE CARGA
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // DATA DE LA BASE DE DATOS Y FILTRO DE BÚSQUEDA
  const [data, setData] = useState<Necklace[]>([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Necklace[]>([]);

  // ABRIR MENU Y EDITAR
  const [openMenu, setOpenMenu] = useState(false);
  const [edit, setEdit] = useState(false);

  // STATE DE EL NUEVO ELEMENTO/ELEMENTO A EDITAR
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [fr, setFr] = useState("");
  const [eng, setEng] = useState("");
  const [copyright, setCopyRight] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploadFile, uploading, snapshot, errorUpload] = useUploadFile();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setSelectedFiles(file);
    setTitle(file![0].name.toLocaleUpperCase().slice(0, -4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(
      query === ""
        ? data
        : data.filter((necklace) => {
            return necklace.title.toLowerCase().includes(query.toLowerCase());
          })
    );
  }, [query]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(getFirestore(), "necklaces")
      );
      const dataArray = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setData(dataArray as Necklace[]);
      setFilteredData(dataArray as Necklace[]);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const saveData = async (e: FormEvent<HTMLFormElement>) => {
    if (selectedFiles) {
      e.preventDefault();
      setLoading(true);
      const file = selectedFiles[0];

      await uploadFile(
        ref(getStorage(), `necklacesImages/${title.toUpperCase()}.JPG`),
        file,
        {
          contentType: file.type,
        }
      ).catch((e) => console.log(e));

      const imageUrl = await getDownloadURL(
        ref(getStorage(), `necklacesImages/${title.toUpperCase()}.JPG`)
      ).catch((e) => console.log(e));

      setImage(imageUrl!);
      console.log(imageUrl)

      const newNecklace: Necklace = {
        title: title,
        image: imageUrl!,
        fr: fr,
        eng: eng,
        copyright: copyright,
      };
      await setDoc(doc(getFirestore(), "necklaces", title), newNecklace)
      .catch(
        (e) => {console.log(e)}
      );
      setLoading(false);
      fetchData();
    }
  };

  const deleteData = async () => {
    try {
      setLoading(true);
      await deleteObject(ref(getStorage(), image));
      await deleteDoc(doc(getFirestore(), "necklaces", title));
      setLoading(false);
      setOpenMenu(false);
      fetchData();
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <BeatLoader color="#000000" loading={loading} size={50} />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>CONNECTION PROBLEM</h1>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.boxHead}>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
        />
        <button
          disabled={openMenu}
          onClick={() => {
            setOpenMenu(true);
            setTitle("");
            setImage("");
            setFr("");
            setEng("");
            setCopyRight("");
          }}
        >
          NEW
        </button>
      </div>

      <div className={styles.box}>
        {filteredData.map((necklace, key) => (
          <div
            className={styles.rowImage}
            key={key}
            onClick={() => {
              setOpenMenu(true);
              setEdit(false);
              setTitle(necklace.title);
              setImage(necklace.image);
              setFr(necklace.fr);
              setEng(necklace.eng);
              setCopyRight(necklace.copyright);
            }}
          >
            <div>Title: {necklace.title}</div>
            <Image
              width={75}
              height={75}
              src={necklace.image}
              alt={necklace.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {openMenu && (
        <div>
          <div className={styles.boxHead2}>
            <button
              className={styles.edit}
              onClick={() => setEdit((preState) => !preState)}>
              EDIT
            </button>
            <button className={styles.delete} onClick={() => deleteData()}>
              DELETE
            </button>
            <button className={styles.close} onClick={() => {setOpenMenu(false), setEdit(false)}}>
              X
            </button>
          </div>

          <form
            className={styles.box2}
            onSubmit={(e) => {
              saveData(e);
            }}
          >
            <div className={styles.row2}>
              {" "}
              Title:
              <input
                onChange={(e) => setTitle(e.target.value)}
                required={true}
                name="title"
                disabled={!edit}
                value={title}
              />
            </div>
            <div className={styles.row2}>
              {" "}
              Image:
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/jpeg"
              />
            </div>
            <div className={styles.row2}>
              {" "}
              FR:
              <textarea
                onChange={(e) => setFr(e.target.value)}
                name="fr"
                disabled={!edit}
                value={fr}
              />
            </div>
            <div className={styles.row2}>
              {" "}
              ENG:
              <textarea
                onChange={(e) => setEng(e.target.value)}
                name="eng"
                disabled={!edit}
                value={eng}
              />
            </div>
            <div className={styles.row2}>
              {" "}
              Copyright:
              <input
                onChange={(e) => setCopyRight(e.target.value)}
                name="copyright"
                disabled={!edit}
                value={copyright}
                required
              />
            </div>
            <button type="submit" value="Submit" className={styles.save}>
              SAVE
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default NecklacesAdmin;
