import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useServices = () => {
    const [serviceLimit,setServiceLimit]=useState(3)
    const {data:services=[], refetch}=useQuery({
        queryKey:['services'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/services?limit=${serviceLimit}`)
            return res.json()
        }
    })
    return {services,refetch,setServiceLimit}
};

export default useServices;