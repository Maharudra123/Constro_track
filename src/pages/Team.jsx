import React from "react";
import { mockTeam, projectMentor } from "../data/mockData";
import TeamCard from "../components/UI/TeamCard";
import MentorCard from "../components/UI/MentorCard";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
        Our Team
      </h1>
      <p className="text-center text-gray-600 mb-16 text-lg">
        Building the future of AI-powered construction management
      </p>

      {/* Mentor Section */}
      <MentorCard
        name={projectMentor.name}
        role={projectMentor.role}
        image={projectMentor.image}
        linkedin={projectMentor.linkedin}
        designation={projectMentor.designation}
        department={projectMentor.department}
      />

      {/* Team Members Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Development Team
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Dedicated professionals bringing this vision to life
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
    </div>
  );
};

export default Team;
