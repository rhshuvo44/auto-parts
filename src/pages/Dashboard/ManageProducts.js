import React, { useEffect, useState } from "react";
import ManageProductsTable from "./ManageProductsTable";

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/parts')
.then(res=>res.json())
.then(data=>setProducts(data))
    },[products])
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Manage Products</h1>
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
            {products.map((product, index) => (
              <ManageProductsTable key={products._id} index={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
