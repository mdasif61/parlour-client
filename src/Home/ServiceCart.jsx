import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { name, price, description, category,_id } = service;
  return (
    <div className="text-center relative bg-white cursor-pointer hover:scale-95 duration-300 shadow-2xl rounded-xl p-7">
      <span className="hover:bg-pink-600 hover:bg-opacity-70 rounded-xl opacity-0 hover:opacity-100 flex items-end justify-center absolute w-full h-full left-0 top-0 ">
        <Link to={`/bookings/${_id}`}>
          <button className="btn bg-white mb-10">Booking Now</button>
        </Link>
      </span>
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-400 mb-3">{category}</p>
        <h1 className="text-pink-600 font-bold mb-3 text-xl">${price}</h1>
        <p className="text-gray-500 leading-7">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCart;
