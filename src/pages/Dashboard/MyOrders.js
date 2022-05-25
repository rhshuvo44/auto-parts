import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderTable from "./OrderTable";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div>
      <h2 className="text-2xl mt-5">My Order</h2>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderTable key={order._id} setOrders={setOrders} index={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
