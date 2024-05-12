import { useEffect, useState } from "react";


const useLoadData = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return data;
};

export default useLoadData;