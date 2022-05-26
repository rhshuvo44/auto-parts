import React from "react";

const Team = ({ team }) => {
    const {name,position,img}=team;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Team;
