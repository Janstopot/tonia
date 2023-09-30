import { useEffect, useState } from "react";
import { Press } from "@/assets/interfaces";
import { BeatLoader } from "react-spinners";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Link from "next/link";

function PressMenu(props: any) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Press[]>([]);
  const [data, setData] = useState<Press[]>([]);
  const [height, setHeight] = useState<HTMLElement>()

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();

  }, []);

  useEffect(() => {
    setFilteredData(query === '' ? data : data.filter((press) => {return press.text.toLowerCase().includes(query.toLowerCase())}));
    if(document.getElementById('list')) props.calcHeight(document.getElementById('list'))
  }, [query]);


  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(getFirestore(), "press"))
      const dataArray = querySnapshot.docs.map((doc:any) => doc.data() as Press);
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
        <li>PRESS</li>
          <li><input onChange={(event) => setQuery(event.target.value)}/></li>
          {filteredData.map((press, key) => (
            <li key={key}>{press.text}</li>
          ))}
      </div>
    </div>
  );
}

export default PressMenu;
