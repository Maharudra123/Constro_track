import React, { useState } from "react";
import { Building2, Menu, X } from "lucide-react";

const Navbar = ({
  currentPage,
  navigate,
  isAuthenticated,
  setIsAuthenticated,
  setShowLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            <Building2 className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Smart Build Monitor</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation("home")}
              className="hover:text-orange-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("team")}
              className="hover:text-orange-400 transition"
            >
              Team
            </button>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => handleNavigation("dashboard")}
                  className="hover:text-orange-400 transition"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    handleNavigation("home");
                  }}
                  className="hover:text-orange-400 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="hover:text-orange-400 transition"
              >
                Login
              </button>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-4 space-y-2">
          <button
            onClick={() => handleNavigation("home")}
            className="block w-full text-left py-2 hover:text-orange-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("team")}
            className="block w-full text-left py-2 hover:text-orange-400"
          >
            Team
          </button>
          {isAuthenticated ? (
            <>
              <button
                onClick={() => handleNavigation("dashboard")}
                className="block w-full text-left py-2 hover:text-orange-400"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  handleNavigation("home");
                }}
                className="block w-full text-left py-2 hover:text-orange-400"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="block w-full text-left py-2 hover:text-orange-400"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
