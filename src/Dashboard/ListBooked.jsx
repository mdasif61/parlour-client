import axios from "axios";
import { FaTrash } from "react-icons/fa";

const ListBooked = ({list}) => {
    const {service,desc, status, _id}=list

    const handleDelete=(id)=>{
        axios.delete()
    }

    return (
        <div className="border-2 p-5 relative border-pink-600 rounded-lg bg-white">
            <div>
                <h1 className="text-xl font-bold mb-3">{service}</h1>
                <p>{desc.slice(0,100)}...</p>
            </div>
            <h3 className="absolute top-5 right-5 bg-red-600 bg-opacity-30 text-red-600 py-1 px-3 text-sm rounded-lg">{status}</h3>
            <button onClick={()=>handleDelete(_id)} title="Delete service" className="btn btn-sm text-red-600 bg-transparent border-none hover:bg-transparent absolute bottom-0 right-0"><FaTrash/></button>
        </div>
    );
};

export default ListBooked;