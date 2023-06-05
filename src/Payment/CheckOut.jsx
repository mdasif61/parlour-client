import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const CheckOut = ({price}) => {

    const {user}=useAuth()

    const [error, setError] = useState('')
    const stripe = useStripe()
    const element = useElements()
    const [axiosSecure]=useAxiosSecure()
    const [clientSecret,setClientSecret]=useState('')

    useEffect(()=>{
        axiosSecure.post('/payment-intent',{price})
        .then(res=>{
            console.log(res)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,price])

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

        const {paymentIntent, error:confirmError}=await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card:card,
                    billing_details:{
                        name:user?.displayName || 'anonymus',
                        email:user?.email || 'anonymus'
                    }
                }
            }
        )
        if(confirmError){
            console.log(confirmError)
            setError(confirmError.message)
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
                    <h2>Your Service Charged Will Be ${price}</h2>
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