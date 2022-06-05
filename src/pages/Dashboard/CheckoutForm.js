import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transtionId, setTranstionId] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://guarded-oasis-40937.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: orders.totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [orders]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    } else {
      setTranstionId(paymentMethod.id);

      toast.success(`Your Payment success`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {transtionId && <p> Your Transition id {transtionId}</p>}
    </form>
  );
};

export default CheckoutForm;
