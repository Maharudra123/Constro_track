import React, { useState } from "react";

const SiteForm = ({ setShowSiteForm, onSubmit }) => {
  const [siteFormData, setSiteFormData] = useState({
    siteName: "",
    location: "",
    startDate: "",
    description: "",
  });

  const handleSubmit = () => {
    if (
      siteFormData.siteName &&
      siteFormData.location &&
      siteFormData.startDate &&
      siteFormData.description
    ) {
      onSubmit(siteFormData);
      setSiteFormData({
        siteName: "",
        location: "",
        startDate: "",
        description: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Register New Site
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Site Name
            </label>
            <input
              value={siteFormData.siteName}
              onChange={(e) =>
                setSiteFormData({ ...siteFormData, siteName: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Location
            </label>
            <input
              value={siteFormData.location}
              onChange={(e) =>
                setSiteFormData({ ...siteFormData, location: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={siteFormData.startDate}
              onChange={(e) =>
                setSiteFormData({ ...siteFormData, startDate: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Description
            </label>
            <textarea
              value={siteFormData.description}
              onChange={(e) =>
                setSiteFormData({
                  ...siteFormData,
                  description: e.target.value,
                })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Register
          </button>
          <button
            onClick={() => setShowSiteForm(false)}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteForm;
