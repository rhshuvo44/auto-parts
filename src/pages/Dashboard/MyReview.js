import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyReview = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      const review={
          ratting:data.ratting,
          description:data.description
      }
    fetch("http://localhost:5000/reviews", {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => {toast.success('Add A Review')
        reset()
    } );
  };
  return (
    <div className="flex h-screen justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Add Your Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mt-5 w-full max-w-xs">
            <input
              type="number"
              placeholder="Ratting Number"
              className="input input-bordered w-full max-w-xs"
              {...register("ratting")}
            />
          </div>
          <div className="form-control mt-5 w-full max-w-xs">
            
            <textarea
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description")}
            />
          </div>
          <input
            className="btn mt-5 w-full max-w-xs"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  </div>
  );
};

export default MyReview;
