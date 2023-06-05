import useBookings from "../hooks/useBookings";
import ListBooked from "./ListBooked";

const BookingList = () => {
  const { bookedlist } = useBookings();

  return bookedlist.length > 0 ? (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7 p-20">
        {bookedlist.map((list) => (
          <ListBooked key={list._id} list={list}></ListBooked>
        ))}
      </div>
    </>
  ) : (
    <div className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-gray-500 font-bold text-3xl">Not Found Booked Service</h1>
    </div>
  );
};

export default BookingList;
