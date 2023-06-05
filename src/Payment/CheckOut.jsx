import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOut = () => {

    const [error, setError] = useState('')

    const stripe = useStripe()
    const element = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
        }

        

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center mt-20">
                <button className="btn bg-pink-600 text-white hover:text-pink-600 my-5 w-36" type="submit" disabled={!stripe || !element}>
                    Pay
                </button>
                </div>
            </form>
            {error&& <p className="text-red-500">{error}</p>}
        </>
    );
};

export default CheckOut;