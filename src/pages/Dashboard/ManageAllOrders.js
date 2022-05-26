import React, { useEffect, useState } from "react";
import ManageAllOrderTable from "./ManageAllOrderTable";

const ManageAllOrders = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/orders')
.then(res=>res.json())
.then(data=>setOrders(data))
    },[orders])
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Manage All Orders</h1>
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
              <ManageAllOrderTable key={order._id} index={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
