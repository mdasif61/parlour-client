import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useBookings from "../hooks/useBookings";

const ListBooked = ({ list }) => {
  const { service, desc, status, _id } = list;
  const {refetch}=useBookings()

<<<<<<< HEAD
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/booked/${id}`)
        .then(data=>{
            if(data.data.deletedCount>0){
                alert('services deleted')
            }
        })
    }
=======
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios.delete(`http://localhost:5000/booked/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch()
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
>>>>>>> d303e38c11dabd2105303ae35a672fa0e314b11c

  return (
    <div className="border-2 p-5 relative border-pink-600 rounded-lg bg-white">
      <div>
        <h1 className="text-xl font-bold mb-3">{service}</h1>
        <p>{desc.slice(0, 100)}...</p>
      </div>
      <h3 className="absolute top-5 right-5 bg-red-600 bg-opacity-30 text-red-600 py-1 px-3 text-sm rounded-lg">
        {status}
      </h3>
      <button
        onClick={() => handleDelete(_id)}
        title="Delete service"
        className="btn btn-sm text-red-600 bg-transparent border-none hover:bg-transparent absolute bottom-0 right-0"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ListBooked;
