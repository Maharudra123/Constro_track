import React from "react";
import { Users, Linkedin } from "lucide-react";

const TeamCard = ({ name, role, image, linkedin }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className={`${
            image ? "hidden" : "flex"
          } absolute inset-0 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700`}
        >
          <div className="bg-white rounded-full p-4">
            <Users className="h-20 w-20 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-orange-600 font-semibold mb-3">{role}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm font-medium">View Profile</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
