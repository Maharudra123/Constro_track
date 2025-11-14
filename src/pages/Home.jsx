import React from "react";
import { LogIn, Users, Camera, TrendingUp, FileText } from "lucide-react";
import FeatureCard from "../components/UI/FeatureCard";

const Home = ({ navigate, setShowLogin }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Smart Build Monitor
          </h1>
          <p className="text-2xl mb-2">
            AI-Powered Construction Progress Tracking
          </p>
          <p className="text-xl mb-8 text-blue-200">
            Automated stage detection and progress monitoring using computer
            vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              Login as Site Manager
            </button>
            <button
              onClick={() => navigate("team")}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              <Users className="h-5 w-5" />
              View Team
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Camera}
            title="Automated Stage Detection"
            description="AI-powered computer vision analyzes construction site images to automatically detect current build stages"
            borderColor="border-blue-500"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Real-time Progress Tracking"
            description="Monitor construction progress in real-time with accurate timeline visualization and milestone tracking"
            borderColor="border-green-500"
          />
          <FeatureCard
            icon={FileText}
            title="AI-Powered Reporting"
            description="Generate comprehensive progress reports with AI-analyzed data and confidence scores"
            borderColor="border-orange-500"
          />
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Powered By Advanced Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-white px-6 py-3 rounded-lg shadow font-semibold text-blue-600">
              React
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow font-semibold text-orange-600">
              PyTorch
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow font-semibold text-yellow-600">
              TensorFlow
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow font-semibold text-green-600">
              Computer Vision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
