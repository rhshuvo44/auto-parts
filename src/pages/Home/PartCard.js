import React from "react";
import { useNavigate } from "react-router-dom";

const PartCard = ({ part }) => {
  const { _id,name, img ,description,minimumQuantity,availablQuantity,price} = part;
  const navigate=useNavigate()
  const handlePurche=(id)=>{
navigate(`/purchase/${id}`)
  }
  return (
    <div className="card w-96 mt-10 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl text-center">{name}</h2>
        <h2 className="card-title">minimum Quantity : {minimumQuantity}</h2>
        <h2 className="card-title">Availabl Quantity : {availablQuantity}</h2>
        <h2 className="card-title">Price : ${price} <small>(per piece)</small></h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handlePurche(_id)} className="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default PartCard;
