import { useEffect, useState } from "react";


const useLoadData = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return data;
};

export default useLoadData;