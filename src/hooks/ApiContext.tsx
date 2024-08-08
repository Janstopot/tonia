import { Necklace } from "@/assets/interfaces";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ApiContext = createContext<{loading:boolean, error : boolean, data : Necklace[]}>({
    error: false,
    loading: true,
    data : []
})

interface ApiProviderProps {
    children: ReactNode;
  }

export function ApiProvider({children} : ApiProviderProps){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<Necklace[]>([])

    useEffect(()=>{
        fetchData()
    }, [])
    
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(getFirestore(), "necklaces"));
            const dataArray = querySnapshot.docs.map((doc:any) => doc.data() as Necklace);
            setData(dataArray);
            setLoading(false);

        } catch (error) {
            setError(true);
            setLoading(false);
        }
      };

    return(
        <ApiContext.Provider value={{loading, error, data}}>
            {children}
        </ApiContext.Provider>

    )

}

export function useApi(){
    return useContext(ApiContext)
}