import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const Bookings = () => {
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();

  const { data: booked = {} } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${id}`);
      return res.data;
    },
  });
  console.log(booked);

  return (
    <div>
      <div className="w-[30%]">
        <h1>Service Name : {booked.name}</h1>
        <h3>Category : {booked.category}</h3>
        <h3>Service Fee : {booked.price}</h3>
        <p>
          Description : <br />
          {booked.description}
        </p>
      </div>
      <div className="w-[70%]">
        <form>

        </form>
      </div>
    </div>
  );
};

export default Bookings;
