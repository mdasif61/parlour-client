import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUsers = () => {
    const {loading}=useAuth()
    const {data:allUser=[], refetch}=useQuery({
        queryKey:['users'],
        enabled:!loading,
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    return {allUser,refetch}
};

export default useUsers;