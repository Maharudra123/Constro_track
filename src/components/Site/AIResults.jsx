import React from "react";
import { CheckCircle, Percent } from "lucide-react";

const AIResults = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6 bg-green-50 border-2 border-green-500 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-green-600" />
        Analysis Results
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Detected Stage:</span>
          <span className="text-blue-600 font-bold">{result.stage}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Confidence:</span>
          <span className="text-green-600 font-bold flex items-center gap-1">
            <Percent className="h-4 w-4" />
            {result.confidence}%
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Timestamp:</span>
          <span className="text-gray-600">{result.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default AIResults;
