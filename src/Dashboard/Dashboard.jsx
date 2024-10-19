import React from "react";
import DashboardView from "./DashboardView";

// Dummy Data
const dashboardData = [
  { title: "Total Employees", value: 64, icon: "👥" },
  { title: "Our Clients", value: 3, icon: "🤝" },
  { title: "Total Projects", value: 11, icon: "📋" },
  { title: "Our Target", value: "Upcoming", icon: "🎯", label: "Annual" },
  { title: "Revenue Collected", value: 0, icon: "💵" },
  { title: "Financial Status", value: "0.00", icon: "📉" },
  { title: "Requirement Requests", value: 0, icon: "📝" },
  { title: "Requests", value: 1, icon: "🔔" },
];

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
        {dashboardData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-[11%] shadow-lg flex flex-col justify-between items-center cursor-pointer"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="text-gray-600 font-semibold mt-2">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
            {item.label && (
              <span className="text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
      <DashboardView />
    </>
  );
};

export default Dashboard;
