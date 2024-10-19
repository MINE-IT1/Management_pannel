import { useState } from "react";
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

const Header = () => {
  // State for notifications, messages, and user info
  const [notifications] = useState(3); // Dummy count
  const [messages] = useState(2); // Dummy count
  const [user] = useState({
    name: "Anand T",
    profileImage: "", // Empty string simulates no profile image
  });

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md  ">
      <h1 className="text-xl font-semibold text-indigo-700">Dashboard</h1>
      <div className="flex items-center space-x-6">
        {/* Notification Icon with count */}
        <div className="relative">
          <FaBell className="text-blue-600 text-2xl cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
        {/* Mail Icon with count */}
        <div className="relative">
          <FaEnvelope className="text-blue-500 text-2xl cursor-pointer" />
          {messages > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {messages}
            </span>
          )}
        </div>
        {/* User Info */}
        <div className="flex items-center space-x-2 cursor-pointer">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <FaUserCircle className="w-8 h-8 text-indigo-700" />
          )}
          <p className="text-indigo-700">Hello, {user.name}</p>
        </div>
      </div>
      
    </header>
  );
};

export default Header;