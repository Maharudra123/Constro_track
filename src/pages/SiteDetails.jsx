import React, { useState } from "react";
import { MapPin, Calendar, TrendingUp, Download } from "lucide-react";
import UploadZone from "../components/Site/UploadZone";
import AIResults from "../components/Site/AIResults";
import ProgressTable from "../components/Site/ProgressTable";

const SiteDetails = ({ selectedSite, navigate }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [aiAnalysisResult, setAiAnalysisResult] = useState(null);

  if (!selectedSite) return null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    const stages = [
      "Site Preparation",
      "Foundation",
      "Super Structure",
      "Finishing",
    ];
    const randomStage = stages[Math.floor(Math.random() * stages.length)];
    const randomConfidence = (85 + Math.random() * 10).toFixed(1);

    setAiAnalysisResult({
      stage: randomStage,
      confidence: randomConfidence,
      timestamp: new Date().toLocaleString(),
    });
  };

  const handleGenerateReport = () => {
    alert("Generating progress report... (Demo functionality)");
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <button
        onClick={() => navigate("dashboard")}
        className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
      >
        ← Back to Dashboard
      </button>

      {/* Site Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">{selectedSite.name}</h1>
        <div className="flex flex-wrap gap-4 text-blue-100">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>{selectedSite.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Started: {selectedSite.startDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <span>{selectedSite.progress}% Complete</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Upload & Analysis */}
        <div>
          <UploadZone
            uploadedImage={uploadedImage}
            onImageUpload={handleImageUpload}
            onAnalyze={analyzeImage}
          />

          <AIResults result={aiAnalysisResult} />

          <button
            onClick={handleGenerateReport}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Download className="h-5 w-5" />
            Generate Progress Report
          </button>
        </div>

        {/* Right Column - Progress Timeline */}
        <ProgressTable updates={selectedSite.updates} />
      </div>
    </div>
  );
};

export default SiteDetails;
