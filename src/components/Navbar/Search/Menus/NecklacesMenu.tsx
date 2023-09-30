import { Necklace } from "@/assets/interfaces";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function NecklacesMenu(props : any) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Necklace[]>([]);
  const [data, setData] = useState<Necklace[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(query === '' ? data : data.filter((necklace) => { return necklace.title.toLowerCase().includes(query.toLowerCase())}));
    if(document.getElementById('list')) props.calcHeight(document.getElementById('list'))
  }, [query]);


  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(getFirestore(), "necklaces"))
      const dataArray = querySnapshot.docs.map((doc:any) => doc.data() as Necklace);
      setData((prevData) => [...prevData, ...dataArray])
      setFilteredData((prevData) => [...prevData, ...dataArray])
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <li>
        <BeatLoader color="#777777" loading={loading} size={50} />
      </li>
    );
  }

  if (error) {
    return <li>Error Loading!</li>;
  }

  return (
    <div id="list">
      <div >
        <li>NECKLACES</li>
        <li><input onChange={(event) => setQuery(event.target.value)}/></li>
          {filteredData.map((necklace, key) => (
            <li key={key}>{necklace.title}</li>
          ))}
      </div>
    </div>
  );
  }

  export default NecklacesMenu;