import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookings = () => {

    const [axiosSecure]=useAxiosSecure()
    const {user, loading}=useAuth()

    const {data:bookedlist=[], refetch}=useQuery({
        queryKey:['booklist', user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/booked?email=${user?.email}`)
            return res.data
        }
    })
    return {bookedlist, refetch}
};

export default useBookings;