import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const imgApi = "84a5698c1163075e540df1dc6008c8cf";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const image = data.photo[0];
    const imageAvatar = new FormData();
    imageAvatar.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
    fetch(url, {
      method: "POST",
      body: imageAvatar,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const updateProfile = {
            email: user.email,
            education: data.education,
            location: data.location,
            number: data.number,
            img: img,
          };
          fetch("https://auto-parts-server-one.vercel.app/updateUser", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateProfile),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Update Your Profile");
              } else {
                toast.error("Faild to Update Your Profile");
              }
            });
        }
      });
  };
  return (
    <div className="p-10 ">
      <h1 className="text-2xl">Update your Profile</h1>
      <div className="divider"></div>

      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  value={user.displayName}
                  disabled
                  type="text"
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
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Education"
                  className="input input-bordered w-full max-w-xs"
                  {...register("education")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered w-full max-w-xs"
                  {...register("location")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("number")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("photo")}
                />
              </div>
              <input
                className="btn w-full max-w-xs mt-5"
                type="submit"
                value="Update Profile"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
