import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import LoginModal from "./components/Auth/LoginModal";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Dashboard from "./pages/Dashboard";
import SiteDetails from "./pages/SiteDetails";
import { mockSites } from "./data/mockData";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [sites, setSites] = useState(mockSites);
  const [selectedSite, setSelectedSite] = useState(null);
  const [showSiteForm, setShowSiteForm] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setShowLogin={setShowLogin}
      />

      {currentPage === "home" && (
        <Home navigate={navigate} setShowLogin={setShowLogin} />
      )}

      {currentPage === "team" && <Team />}

      {currentPage === "dashboard" && isAuthenticated && (
        <Dashboard
          sites={sites}
          setSites={setSites}
          showSiteForm={showSiteForm}
          setShowSiteForm={setShowSiteForm}
          setSelectedSite={setSelectedSite}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "site-details" && isAuthenticated && (
        <SiteDetails selectedSite={selectedSite} navigate={navigate} />
      )}

      {showLogin && (
        <LoginModal
          setShowLogin={setShowLogin}
          setIsAuthenticated={setIsAuthenticated}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
