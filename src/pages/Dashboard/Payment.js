import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L5saqAqlGujQC2wq9MHnFEpO0G6SNB7K5XtOjQSnXcbjfXgRyhv1NwSZbMiuI9OuXhNdkRsKYV6Ce3bCbBw737Z00ieD9uE9a"
);
const Payment = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`https://auto-parts-server-one.vercel.app/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  return (
    <div className="p-10 w-2/4 m-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">Hello, {orders.name}</h2>
          <h2 className="card-title text-2xl">Hello, {orders.productName}</h2>
          <p className="card-title ">Please Pay: ${orders.totalPrice}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 mt-10 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
