import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Looding from "../Shared/Looding";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
    
  const {
    register,
    handleSubmit,
  } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    if ( updating) {
        return <Looding/>;
      }
      const onSubmit = async (data) => {
        await updateProfile({photoURL:data.photoURL });
      };
  return (
    <div className="p-10 ">
      <h1 className="text-2xl">Update your Profile</h1>
      <div class="divider"></div>


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
                    <span className="label-text">Profile Picture url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Profile Picture url"
                    className="input input-bordered w-full max-w-xs"
                    {...register("photoURL")}
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
