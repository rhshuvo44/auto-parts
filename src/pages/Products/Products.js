import React from "react";
import { useQuery } from "react-query";
import PartCard from "../Home/PartCard";
import Looding from "../Shared/Looding";

const Products = () => {
  const { isLoading, data: parts } = useQuery("parts", () =>
    fetch(`https://guarded-oasis-40937.herokuapp.com/parts`).then((res) => res.json())
  );

  if (isLoading) return <Looding />;
  return (
    <div className="p-10">
      <h1 className="font-bold text-primary text-5xl text-center">
        All Products
      </h1>
      <div className="divider"></div>
      <div className="grid md:grid-cols-3 ">
        {parts.map((part) => (
          <PartCard key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Products;
