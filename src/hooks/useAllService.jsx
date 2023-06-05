import { useEffect, useState } from "react";

const useAllService = () => {
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        fetch('http://localhost:5000/total-services')
        .then(res=>res.json())
        .then(data=>{
            setTotal(data)
        })
    },[])
    return {total}
};

export default useAllService;