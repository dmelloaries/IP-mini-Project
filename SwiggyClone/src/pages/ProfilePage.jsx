import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import dp from "../dp.png"; 

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    profileImage: null,
  });

  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://login-backend-z1rw.onrender.com/api/info/user-details",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserDetails(response.data);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError(
          err.response?.data?.message || "Failed to fetch user details"
        );
      } finally {
        setLoading(false); // Ensure loading stops in all cases
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 rounded-full h-24 w-24 flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={userDetails.profileImage || dp}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">{userDetails.name}</h1>
          <p className="text-gray-600 mb-6">{userDetails.email}</p>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium mb-4">Account Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={userDetails.name}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={userDetails.email}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
