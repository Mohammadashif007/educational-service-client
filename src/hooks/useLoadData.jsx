// import { useEffect, useState } from "react";

// const useLoadData = (email) => {
//     const [data, setData] = useState([]);

//     useEffect(()=> {
//         let url = 'http://localhost:3000/services' ;
//         if(email){
//             url = url += `?email=${email}`
//         }
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setData(data))
//     },[])

//     return data;
// };

// export default useLoadData;

import { useQuery } from "@tanstack/react-query";

const useLoadData = (url) => {
    const { isPending, error, data } = useQuery({
        queryKey: [url], // Use the URL as the query key
        queryFn: () =>
            fetch(url).then((res) => res.json()),
    });
    return { isPending, error, data };
};

export default useLoadData;
