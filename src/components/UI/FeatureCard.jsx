import React from "react";

const FeatureCard = ({ icon: Icon, title, description, borderColor }) => {
  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 ${borderColor}`}
    >
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
