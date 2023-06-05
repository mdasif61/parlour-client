import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Bookings = () => {
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();
  const { data: booked = {} } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${id}`);
      return res.data;
    },
  });

  const handleBooking = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const { name, category, price, _id } = booked;
    const bookedService = {
      service: name,
      category: category,
      price,
      bookedId: _id,
      phone,
      address,
    };

    axiosSecure
      .post("http://localhost:5000/booked", bookedService)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          event.target.reset()
        }
      });
  };
  return (
    <>
      <div className="flex my-20">
        <div className="w-[40%] p-16">
          <h1 className="text-xl font-bold mb-3 border-b-2 pb-2">
            {booked.name}
          </h1>
          <h3>
            <span className="font-bold">Category :</span> {booked.category}
          </h3>
          <h3>
            <span className="font-bold">Service Fee :</span> ${booked.price}
          </h3>
          <p>
            <span className="font-bold">Description :</span>{" "}
            {booked.description}
          </p>
        </div>
        <div className="w-[60%] flex items-center p-16 justify-center">
          <form onSubmit={handleBooking} className="w-full">
            <div className="grid grid-cols-2 gap-5 w-full">
              <div className="w-full">
                <label htmlFor="name">
                  <span className="font-semibold">Name</span>
                </label>
                <br />
                <input
                  className="w-full focus:outline-none border h-12 py-2 px-4 mt-1"
                  type="text"
                  readOnly
                  value={user?.displayName}
                />
              </div>

              <div className="w-full">
                <label htmlFor="email">
                  <span className="font-semibold">Eamil</span>
                </label>
                <br />
                <input
                  className="w-full focus:outline-none border h-12 py-2 px-4 mt-1"
                  type="email"
                  readOnly
                  value={user?.email}
                />
              </div>

              <div className="w-full">
                <label htmlFor="phone">
                  <span className="font-semibold">Phone</span>
                </label>
                <br />
                <input
                  className="w-full focus:outline-none border h-12 py-2 px-4 mt-1"
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full">
                <label htmlFor="address">
                  <span className="font-semibold">Address</span>
                </label>
                <br />
                <input
                  className="w-full focus:outline-none border h-12 py-2 px-4 mt-1"
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-pink-600 text-white hover:text-pink-600 btn-block mt-5"
            >
              Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Bookings;
