import React from "react";
import team1 from '../../image/catalog/about/cl-image-1.jpg';
import team2 from '../../image/catalog/about/cl-image-2.jpg';
import team3 from '../../image/catalog/about/cl-image-3.jpg';
import Team from "./Team";

const OurTeam = () => {
  const teams = [
      {id:1, name: "Ripon", position:'Co-Manneger',img:`${team1}` },
      {id:2, name: "Hossain", position:'Product-Manneger',img:`${team2}` },
      {id:3, name: "Shuvo", position:'Sells-Manneger',img:`${team3}` },
];
  return (
    <div className="p-10">
      <h1 className="font-bold text-center text-5xl">Our Team</h1>
      <div className="divider"></div>
      <div className="grid grid-col-1 md:grid-cols-3">
          {
              teams.map(team=><Team key={team.id} team={team}/>)
          }
      </div>
    </div>
  );
};

export default OurTeam;
