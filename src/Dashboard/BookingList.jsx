import useBookings from "../hooks/useBookings";
import ListBooked from "./ListBooked";

const BookingList = () => {

    const {bookedlist}=useBookings()

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 p-20">
            {
                bookedlist.map(list=><ListBooked
                key={list._id}
                list={list}
                ></ListBooked>)
            }
        </div>
    );
};

export default BookingList;