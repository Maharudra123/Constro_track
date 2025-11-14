import React from "react";

const ProgressTable = ({ updates }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Progress Timeline
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-700">
                Date
              </th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">
                Stage
              </th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700">
                Confidence
              </th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-2 text-sm">{update.date}</td>
                <td className="py-4 px-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {update.stage}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <span className="text-green-600 font-bold">
                    {update.confidence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTable;
