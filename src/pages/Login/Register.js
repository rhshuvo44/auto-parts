import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Looding from "../Shared/Looding";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let signError;
    
      const from = location.state?.from?.pathname || "/";
      
      if (user || gUser) {
        navigate(from, { replace: true });
      }
      if (error || gError || updateError) {
        signError = (
          <p className="text-red-500 mb-5">
            Error: {error?.message || gError?.message}
          </p>
        );
      }
      if (loading || gLoading || updating) {
        return <Looding/>;
      }
      const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
      };
      const hangleGoogle = () => {
        signInWithGoogle();
      };
      return (
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.name?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    class="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {signError}
                <input
                  className="btn w-full max-w-xs"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <p>
                Already have an account ?
                <Link to="/login" className="text-primary">
                  {" "}
                  Please Login
                </Link>
              </p>
              <div className="divider">OR</div>
              <button className="btn btn-outline" onClick={hangleGoogle}>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      );
};

export default Register;