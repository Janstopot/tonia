import { FormEvent, useEffect, useRef, useState } from "react";
import { Press } from "@/assets/interfaces";
import { BeatLoader } from "react-spinners";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import styles from "../Admin.module.scss"

interface Press2 {
    id: string;
    date: string;
    text: string;
    link: string;
}

function PressAdmin(){
    // ESTADOS DE CARGA
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // DATA DE LA BASE DE DATOS Y FILTRO DE BÚSQUEDA
    const [data, setData] = useState<Press2[]>([]);
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState<Press2[]>([]);

    // ABRIR MENU Y EDITAR
    const [openMenu, setOpenMenu] = useState(false)
    const [edit, setEdit] = useState(false)

    // STATE DE EL NUEVO ELEMENTO/ELEMENTO A EDITAR
    const [id, setId] = useState("")
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        fetchData();
      }, []);

    useEffect(() => {
        setFilteredData(query === '' ? data : data.filter((press) => {
            return press.text.toLowerCase().includes(query.toLowerCase())
        }))
        }, [query]);
    


    const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(getFirestore(), "press"))
          const dataArray = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,          // Save the document ID
              ...doc.data(),       // Save the document data
            };
          });
          setData(dataArray as Press2[])
          setFilteredData(dataArray as Press2[])
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
    
    const saveData = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        setLoading(true)
        const newPress : Press = {
            text : text,
            date : date,
            link : link
        }
        if(id === "") {
            await addDoc(collection(getFirestore(), "press"), newPress)
            .then(()=> {
                setLoading(false)
                fetchData()
            }).catch((e) => {
                setError(true);
                setLoading(false)
            });
        }
        else {
            await setDoc(doc(getFirestore(), "press", id), newPress)
                .then(()=> {
                setLoading(false)
                fetchData()
            }).catch((e) => {
                setError(true);
                setLoading(false)
            });

        }
        setOpenMenu(false)
    }


    const deleteData = async ()=> {        
        try{
            setLoading(true)
            await deleteDoc(doc(getFirestore(), "press", id))
            setLoading(false)
            setOpenMenu(false)
            fetchData()
        }catch(error){
            setError(true);
            setLoading(false)
        }
    }




    if (loading) {return (<div><BeatLoader color="#000000" loading={loading} size={50} /></div>);}
    if(error) {return (<div><h1>CONNECTION PROBLEM</h1></div>)}

    return(
        <div>
            <div className={styles.boxHead}>
                <input onChange={(event) => setQuery(event.target.value)} placeholder="Search..."/>
                <button disabled={openMenu} onClick={()=> {
                    setOpenMenu(true)
                    setId("")
                    setText("")
                    setDate("")
                    setLink("")
                    }}>NEW</button>
            </div>
            <div className={styles.box}>
                {filteredData.map((press, key) => (
                <div className={styles.row} key={key}>
                    <div onClick={()=> {
                        setOpenMenu(true)
                        setEdit(false)
                        setId(press.id)
                        setText(press.text)
                        setDate(press.date)
                        setLink(press.link)

                        }}>
                        <div>Title: {press.text}</div>
                        <div>Date: {press.date}</div>
                        <div>Link: {press.link}</div>
                    </div>

                </div>
                ))}
            </div>


            {openMenu &&
            <div>
                <div className={styles.boxHead2}>
                    <button className={styles.edit} onClick={()=> setEdit(preState => !preState)}>EDIT</button>
                    <button className={styles.delete} onClick={()=> deleteData()}>DELETE</button>
                    <button className={styles.close} onClick={()=> setOpenMenu(false)}>X</button>
                </div>


                <form className={styles.box2} onSubmit={(e) => {saveData(e)}}>
                    <div className={styles.row2}> Title: 
                        <input onChange={(e)=> setText(e.target.value)} required={true} name="text" disabled={!edit}  value={text}/>
                    </div> 
                    <div className={styles.row2}> Date: 
                        <input onChange={(e) => setDate(e.target.value)} name="date" disabled={!edit} value={date} />
                    </div> 
                    <div className={styles.row2}> Link: 
                        <input onChange={(e)=> setLink(e.target.value)} name="link" disabled={!edit} value={link}/>
                    </div>
                    <button type="submit" value="Submit" className={styles.save}>{id === "" ? "SAVE" : "EDIT"}</button> 
                </form>
            </div>
            }
        </div>
    )
}


export default PressAdmin;