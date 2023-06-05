import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../Payment/CheckOut";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_SECURE);

const Book = () => {
    return (
        <div className="w-full p-20">
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Book;