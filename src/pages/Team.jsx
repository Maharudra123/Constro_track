import React from "react";
import { mockTeam } from "../data/mockData";
import TeamCard from "../components/UI/TeamCard";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Meet Our Team
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Expert professionals building the future of construction management
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockTeam.map((member, idx) => (
          <TeamCard
            key={idx}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
