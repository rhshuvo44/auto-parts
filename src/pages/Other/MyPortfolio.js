import React from "react";

const MyPortfolio = () => {
  return (
    <div className="p-10">
      <div className="w-3/4 m-auto">
        <h5>MERN STACK WEB DEVELOPER</h5>
        <h1 className="font-bold text-5xl">
          Hello, I’m <span className="text-primary">Ripon Hossain Shuvo</span>
        </h1>
        <p className="mt-5">Email: <span className="text-primary">rhshuvo44@gmail.com</span></p>
        <p className="font-bold w-2/3 mt-10 text-slate-500">
          Passionate to work as a MERN Stack Web Developer for a software firm
          where I can leverage my talents in Web Design, Front-End and Back-End
          Web Development to give excellent customer service.
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h1 className="text-5xl text-center">My Skill</h1>
          <div class="divider"></div>

          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">HTML</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="80"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">CSS</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">BOOTSTRAP</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="90"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">TAILWINDCSS</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="60"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">JAVASCRIPT</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="60"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">REACT</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="80"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">NODE JS</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">EXPRESS</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class=" text-primary font-3xl">MONGODB</span>
            </label>
            <progress
              class="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div>
          <h1 className="text-5xl text-center">My Education</h1>

          <div class="divider"></div>
          <h3>
            Diploma in Engineering: Computer Technology
          </h3>
          <p className="font-bold">Chandpur Polytechnic Institute</p>
          <p>Chandpur, Chittagong</p>
          <h1 className="text-3xl mt-10">Courses</h1>
          <div class="divider"></div>
          <h3 className=" font-2xl">
            Complete Web Development Course with Jhankar Mahbub
          </h3>
          <p className="font-bold">Programming Hero</p>
          <div class="divider"></div>
          <h3 >
            React Js
          </h3>
          <p className="font-bold">European IT Institute</p>

        </div>
      </div>
      <div className="text-center ">
          
      <h1 className="text-5xl text-center">My Project</h1>
      <div class="divider"></div>
      <p className="mt-5 text-2xl">Project 1: <span className="text-primary"><a href="https://auto-parts-4490a.web.app/" >Auto Parts</a></span> </p>
      <p className="mt-5 text-2xl">Project 2: <span className="text-primary"> <a href="https://iphone-warehouse.web.app/" >iphone-warehouse</a></span></p>
      <p className="mt-5 text-2xl">Project 3:<span className="text-primary">  <a href="https://gym-trainer-2728e.web.app/" >gym-trainer</a></span></p>
      </div>


    </div>
  );
};

export default MyPortfolio;
