import { useLoaderData } from "react-router-dom";
import useServices from "../hooks/useServices";
import ServiceCart from "./ServiceCart";

const Services = () => {

    const {services,setServiceLimit}=useServices()

    const {total}=useLoaderData();
    console.log(total)

    const handleShow=()=>{
        setServiceLimit(total)
        
    }

    return (
        <div className="my-20">
            <h1 className="text-3xl font-bold text-center">Our Awesome <span className="text-pink-600">Services</span></h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    services.map(service=><ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
            <button onClick={handleShow} className="btn bg-pink-600 text-white hover:text-pink-600">Explore More</button>
        </div>
    );
};

export default Services;