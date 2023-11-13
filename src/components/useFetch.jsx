import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const abortControler = new AbortController();

        fetch(url, {signal:abortControler.signal}).then(response => {
            if(!response.ok){
                throw Error ('Could not fetch the data')
            }

            return response.json();
        }).then((data) => {
            setData(data);
            setIsPending(false);
            setError(false);

        }).catch(err => {
            if(err.name === 'AbortError'){
                console.log('Abort the fetch');
            }else{
                setError(err.message);
                setIsPending(null);
            }
       
        })

        return () => abortControler.abort()

    },[url])

    return {data,isPending,error};
}
 
export default useFetch;