import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
    const [user] = useAuthState(auth);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [part, setPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [part]);
  const onSubmit = (data) => {
  };
  return (
    <div className="py-10">
      <h1 className="text-5xl mb-10 text-center">Welcome to Purchase</h1>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={part.img}
            class=" w-2/4 rounded-lg shadow-2xl"
          alt=""/>
          <div className="mx-10">
            <h1 class="text-5xl font-bold">Name : {part.name}</h1>
            <p class="text-3xl font-bold">Id : {part._id}</p>
            <h1 class="text-3xl font-bold">Minimum Quantity : {part.minimumQuantity}</h1>
            <h1 class="text-3xl font-bold">Availabl Quantity : {part.availablQuantity}</h1>
            <h1 class="text-3xl font-bold">Price : ${part.price}</h1>
            <p class="p-6">{part.description}</p>
            <button class="btn btn-primary">Get Started</button>
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
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("productName")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
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
