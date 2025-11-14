import React from "react";
import { MapPin, CheckCircle, Calendar } from "lucide-react";

const SiteCard = ({ site, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{site.name}</h3>
        <div className="flex items-center gap-2 text-blue-100">
          <MapPin className="h-4 w-4" />
          <span>{site.location}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Progress
            </span>
            <span className="text-sm font-bold text-blue-600">
              {site.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${site.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="font-semibold text-gray-700">Current Stage:</span>
            <span className="text-blue-600">{site.currentStage}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-orange-600" />
            <span className="font-semibold text-gray-700">Started:</span>
            <span>{site.startDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
