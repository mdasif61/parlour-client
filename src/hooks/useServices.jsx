import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceLimit, setServiceLimit] = useState(3);
  const [services,setServices]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/services?limit=${serviceLimit}`)
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[serviceLimit])

  return { services,setServiceLimit, serviceLimit };
};

export default useServices;
