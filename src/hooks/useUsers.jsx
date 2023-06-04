import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {data:allUser=[], refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    return {allUser,refetch}
};

export default useUsers;