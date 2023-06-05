import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../Payment/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import useBookings from "../hooks/useBookings";


const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_SECURE);

const Book = () => {
    
    const {bookedlist}=useBookings() 
    const total=bookedlist.reduce((sum,item)=>sum+item.price,0)
    const price=parseFloat(total.toFixed(2))

    return (
        <div className="w-full p-20">
            <Elements stripe={stripePromise}>
                <CheckOut price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Book;