import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { FaUserFriends, FaDatabase, FaPhoneAlt, FaCheckCircle, FaClipboardList, FaUserCheck } from "react-icons/fa";

const salesData = [
  { label: "Total Employees", value: "1,294", icon: <FaUserFriends />, color: "from-purple-400 to-purple-600" },
  { label: "Total Database", value: "1,303", icon: <FaDatabase />, color: "from-pink-400 to-pink-600" },
  { label: "Converted Clients", value: "345", icon: <FaUserCheck />, color: "from-green-400 to-green-600" },
  { label: "Fresh Calls", value: "800", icon: <FaPhoneAlt />, color: "from-blue-400 to-blue-600" },
  { label: "Follow-up Calls", value: "300", icon: <FaClipboardList />, color: "from-yellow-400 to-yellow-600" },
  { label: "Closure Calls", value: "345", icon: <FaCheckCircle />, color: "from-green-400 to-green-600" },
];

const SalesOverview = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {salesData.map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${item.color} text-white transform transition-all hover:scale-105`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{item.icon}</div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
            <p className="text-md">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* User Statistics Chart */}
      <motion.div
        className="p-4 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-700">User Statistics</h3>
        <div className="h-96">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Fresh Calls",
                  data: [400, 500, 600, 700, 900, 1000],
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.3)",
                  tension: 0.4,
                },
                {
                  label: "Follow-up Calls",
                  data: [200, 300, 350, 400, 450, 500],
                  borderColor: "#facc15",
                  backgroundColor: "rgba(250, 204, 21, 0.3)",
                  tension: 0.4,
                },
                {
                  label: "Closure Calls",
                  data: [100, 150, 200, 250, 300, 345],
                  borderColor: "#22c55e",
                  backgroundColor: "rgba(34, 197, 94, 0.3)",
                  tension: 0.4,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SalesOverview;
