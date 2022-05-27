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
    <div className="py-10">
      <h1 className="text-center font-bold text-2xl">Manage Products</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>no</th>
              <th>Product Name</th>
              <th>Minimum Quantity</th>
              <th>Availabl Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageProductsTable key={product._id} index={index} product={product} setProducts={setProducts} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
