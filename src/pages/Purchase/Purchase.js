import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [part, setPart] = useState({});
  const [user] = useAuthState(auth);
  const { id } = useParams();
  let quantityError;
  const { register, handleSubmit ,reset} = useForm();
  useEffect(() => {
    fetch(`https://guarded-oasis-40937.herokuapp.com/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [part]);
  const onSubmit = (data) => {
    const totalPrice =part.price * data.quantity;
    const order = {
      name: user.displayName,
      email: user.email,
      productName: part.name,
      quantity: data.quantity,
      totalPrice: totalPrice,
      phone: data.phone,
      address: data.address,
    };
    fetch("https://guarded-oasis-40937.herokuapp.com/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {toast.success('Order Success') 
      reset()
    
    });
  };
  const handleQuantity = (e) => {

  };
  return (
    <div className="py-10">
      <h1 className="text-5xl mb-10 text-center">Welcome to Purchase</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={part.img} className=" w-2/4 rounded-lg shadow-2xl" alt="" />
          <div className="mx-10">
            <h1 className="text-5xl font-bold">Name : {part.name}</h1>
            <p className="text-3xl font-bold">Id : {part._id}</p>
            <h1 className="text-3xl font-bold">
              Minimum Quantity : {part.minimumQuantity}
            </h1>
            <h1 className="text-3xl font-bold">
              Availabl Quantity : {part.availablQuantity}
            </h1>
            <h1 className="text-3xl font-bold">Price : ${part.price}</h1>
            <p className="p-6">{part.description}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="flex justify-center items-center">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">Your Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  disabled
                  value={user.email}
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={part.name}
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("productName")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  onChange={handleQuantity}
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity")}
                />
                <label className="label">
                  <span className="label-text">{quantityError}</span>
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Per Price</span>
                </label>
                <input
                  type="number"
                  disabled
                  value={part.price}
                  placeholder="Per Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("totalPrice")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address")}
                />
              </div>
              <input
                className="btn mt-5 w-full max-w-xs"
                type="submit"
                value="Order Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
