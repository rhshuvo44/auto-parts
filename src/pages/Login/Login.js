import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Looding from '../Shared/Looding';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let signError;
    
      const from = location.state?.from?.pathname || "/";
      if (loading || gLoading) {
        return <Looding/>;
      }
      if (error || gError) {
        signError= <p className="text-red-500 mb-5">Error: {error?.message || gError?.message}</p>;
      }
      if (user || gUser) {
        navigate(from, { replace: true });
      }
      
      
      const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
      };
      const hangleGoogle = () => {
        signInWithGoogle();
      };
      return (
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
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
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {signError}
                <input
                  className="btn w-full max-w-xs"
                  type="submit"
                  value="Login"
                />
              </form>
              <p>New to Auto Parts ?<Link to='/register' className='text-primary'> Create new Account</Link></p>
              <div className="divider">OR</div>
              <button className="btn btn-outline" onClick={hangleGoogle}>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      );
};

export default Login;