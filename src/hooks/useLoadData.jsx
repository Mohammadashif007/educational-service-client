import { useEffect, useState } from "react";


const useLoadData = (email) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        let url = 'http://localhost:3000/services' ;
        if(email){
            url = url += `?email=${email}`
        }
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return data;
};

export default useLoadData;