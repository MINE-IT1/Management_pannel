import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { FaArrowDown, FaWallet, FaTasks, FaFileInvoiceDollar, FaProjectDiagram, FaDollarSign } from "react-icons/fa";

const financeData = [
  { label: "Company Growth", value: "-5.5%", icon: <FaArrowDown />, color: "from-red-400 to-red-600" },
  { label: "Total Income", value: "$10,000", icon: <FaDollarSign />, color: "from-green-400 to-green-600" },
  { label: "Current Balance", value: "$12,500", icon: <FaWallet />, color: "from-yellow-400 to-yellow-600" },
  { label: "Today's Requests", value: "8", icon: <FaTasks />, color: "from-blue-400 to-blue-600" },
  { label: "Unactioned Requests", value: "3", icon: <FaFileInvoiceDollar />, color: "from-red-400 to-red-600" },
  { label: "Actioned Requests", value: "5", icon: <FaTasks />, color: "from-purple-400 to-purple-600" },
  { label: "Project Income", value: "$8,000", icon: <FaProjectDiagram />, color: "from-teal-400 to-teal-600" },
  { label: "Total Expense", value: "$5,500", icon: <FaDollarSign />, color: "from-orange-400 to-orange-600" },
];

const FinanceOverview = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {financeData.map((item, index) => (
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

      {/* Financial Progress Chart */}
      <motion.div
        className="p-4 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Financial Progress</h3>
        <div className="h-96">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Revenue",
                  data: [1000, 2000, 3000, 4000, 5000, 8000],
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.3)",
                  tension: 0.4,
                },
                {
                  label: "Expenses",
                  data: [500, 1000, 1500, 2000, 3000, 5000],
                  borderColor: "#f87171",
                  backgroundColor: "rgba(248, 113, 113, 0.3)",
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

export default FinanceOverview;
