import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserinfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/updateUser/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setUserinfo(result);
      });
  }, [user.email]);

  return (
    <div className="p-10">
      <h1 className="text-2xl">My Profile</h1>
      <div class="divider"></div>
      <div class="card w-2/4 bg-base-100 mt-10 shadow-xl m-auto">
        <figure>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo.img} alt={user.displayName} />
            </div>
          </div>
        </figure>
        <div class="card-body ">
          <h2 class="card-title">Name :{user.displayName}</h2>
          <h2 class="card-title">Email :{user.email}</h2>
          <h2 class="card-title">Education :{userInfo.education}</h2>
          <h2 class="card-title">Location :{userInfo.location}</h2>
          <h2 class="card-title">Number :{userInfo.number}</h2>
          <div class="card-actions justify-center mt-10">
            <Link to="/dashboard/updateProfile">
              <button class="btn btn-primary">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
