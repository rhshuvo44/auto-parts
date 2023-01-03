import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {

  const { register, handleSubmit ,reset} = useForm();

    const onSubmit = (data) => {
        const addProduct = {
            name: data.name,
            img:data.img,
            description:data.description,
            minimumQuantity:data.minimumQuantity,
            availablQuantity:data.availablQuantity,
            price:data.price
        };
        fetch("https://auto-parts-server-one.vercel.app/parts", {
          method: "POST",
          body: JSON.stringify(addProduct),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((json) => {toast.success('Order Success') 
          reset()
        
        });
      };
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl ">Add A  New Product</h1>
      <div className="divider"></div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">Product Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Availabl Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Availabl Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("availablQuantity")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Minimum Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Minimum Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimumQuantity")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Per Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Per Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Image url"
                  className="input input-bordered w-full max-w-xs"
                  {...register("img")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs"
                  {...register("description")}
                />
              </div>
              <input
                className="btn mt-5 w-full max-w-xs"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
