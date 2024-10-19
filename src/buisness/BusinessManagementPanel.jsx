import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaTasks, FaCheckCircle, FaSpinner } from "react-icons/fa";

const businessData = [
  { label: "Number of Clients", value: "150", icon: <FaUsers />, color: "from-blue-400 to-blue-600" },
  { label: "Business Growth Rate", value: "12%", icon: <FaChartLine />, color: "from-green-400 to-green-600" },
  { label: "Key Objective Progress", value: 70, icon: <FaTasks />, color: "from-yellow-400 to-yellow-600", isProgress: true },
  { label: "Completed Activities", value: "80", icon: <FaCheckCircle />, color: "from-purple-400 to-purple-600" },
  { label: "Activities in Progress", value: "20", icon: <FaSpinner />, color: "from-red-400 to-red-600" },
];

const ProgressBar = ({ value }) => {
  return (
    <div className="w-full bg-white h-2 rounded-full">
      <div
        className="bg-white h-full rounded-full"
        style={{ width: `${value}%`, backgroundColor: "#4CAF50" }} // Adjust color based on value
      ></div>
    </div>
  );
};

const BusinessManagementPanel = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Management Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {businessData.map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${item.color} text-white transform transition-all hover:scale-105`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{item.icon}</div>
              <p className="text-xl font-semibold">{item.isProgress ? `${item.value}%` : item.value}</p>
            </div>
            <p className="text-md">{item.label}</p>

            {/* Custom Progress Bar for Objectives */}
            {item.isProgress && (
              <div className="mt-4">
                <ProgressBar value={item.value} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessManagementPanel;
