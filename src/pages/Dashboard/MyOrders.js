import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderTable from "./OrderTable";

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;
    if(user){
    fetch(`http://localhost:5000/orders?email=${email}`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));}
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl mt-5">My Order</h2>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
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
