import React, { useState } from "react";

const LoginModal = ({ setShowLogin, setIsAuthenticated, setCurrentPage }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = () => {
    if (loginEmail === "admin@gmail.com" && loginPassword === "admin@123") {
      setIsAuthenticated(true);
      setShowLogin(false);
      setCurrentPage("dashboard");
      setLoginEmail("");
      setLoginPassword("");
    } else {
      alert("Invalid credentials! Use admin@gmail.com / admin@123");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Site Manager Login
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="admin@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="admin@123"
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Demo credentials: admin@gmail.com / admin@123
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
