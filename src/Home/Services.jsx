import { useLoaderData } from "react-router-dom";
import useServices from "../hooks/useServices";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const { services, setServiceLimit, serviceLimit } = useServices();
  const { total } = useLoaderData();

  const handleShow = () => {
    setServiceLimit(total);
  };

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-center">
        Our Awesome <span className="text-pink-600">Services</span>
      </h1>
      <div className="grid md:grid-cols-3 my-20 grid-cols-1 gap-7">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleShow}
          className={`btn bg-pink-600 text-white hover:text-pink-600 ${
            serviceLimit === total && "hidden"
          }`}
        >
          Explore More
        </button>
        {serviceLimit === total && (
          <button
            onClick={() => setServiceLimit(3)}
            className="btn bg-pink-600 text-white hover:text-pink-600"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
