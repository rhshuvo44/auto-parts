import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="hero min-h-screen">
      <div className="hero-content text-center">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Welcome to <span className="text-primary">AutoStore</span>
          </h3>
          <h1 className="text-5xl font-bold text-slate-100 uppercase mt-5">
            <span className="text-primary">The best</span> Automotive shop
          </h1>
          <p className="py-6 m-auto max-w-md text-slate-100 text-center">
          The major systems of an automobile are the engine, fuel system, exhaust system, cooling system, lubrication system, electrical system, transmission, and the chassis. The chassis includes the wheels and tires, the brakes, the suspension system, and the body
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
