import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceLimit, setServiceLimit] = useState(3);
  const [services,setServices]=useState([])
//   const { data: services = [], refetch } = useQuery({
//     queryKey: ["services"],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/services?limit=${serviceLimit}`
//       );
//       return res.json();
//     },
//   });

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
