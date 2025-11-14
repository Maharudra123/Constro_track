import React from "react";
import { Building2 } from "lucide-react";
import SiteCard from "../components/Dashboard/SiteCard";
import SiteForm from "../components/Dashboard/SiteForm";

const Dashboard = ({
  sites,
  setSites,
  showSiteForm,
  setShowSiteForm,
  setSelectedSite,
  setCurrentPage,
}) => {
  const handleSiteRegistration = (formData) => {
    const newSite = {
      id: sites.length + 1,
      name: formData.siteName,
      location: formData.location,
      startDate: formData.startDate,
      description: formData.description,
      currentStage: "Site Preparation",
      progress: 5,
      updates: [],
    };
    setSites([...sites, newSite]);
    setShowSiteForm(false);
    alert("Site registered successfully!");
  };

  const handleSiteClick = (site) => {
    setSelectedSite(site);
    setCurrentPage("site-details");
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Construction Sites</h1>
        <button
          onClick={() => setShowSiteForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
        >
          <Building2 className="h-5 w-5" />
          Register New Site
        </button>
      </div>

      {showSiteForm && (
        <SiteForm
          setShowSiteForm={setShowSiteForm}
          onSubmit={handleSiteRegistration}
        />
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site) => (
          <SiteCard
            key={site.id}
            site={site}
            onClick={() => handleSiteClick(site)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
