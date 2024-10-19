import React from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaUserCheck,
  FaUsers,
  FaUserTimes,
  FaChartLine,
} from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Hr = () => {
  const cardsData = [
    {
      title: "Total Requirement",
      icon: <FaBriefcase />,
      count: 2,
      percentage: 100,
      color: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Applications Received",
      icon: <FaFileAlt />,
      count: 0,
      percentage: 0,
      color: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      title: "Today Interview",
      icon: <FaUserCheck />,
      count: 0,
      percentage: 0,
      color: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Shortlisted",
      icon: <FaUsers />,
      count: 0,
      percentage: 0,
      color: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      title: "Selected",
      icon: <FaUserCheck />,
      count: 0,
      percentage: 0,
      color: "bg-indigo-100",
      iconColor: "text-indigo-500",
    },
    {
      title: "Rejected",
      icon: <FaUserTimes />,
      count: 0,
      percentage: 0,
      color: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      title: "Hired",
      icon: <FaChartLine />,
      count: 0,
      percentage: 0,
      color: "bg-green-100",
      iconColor: "text-green-500",
    },
  ];

  const departmentData = {
    labels: ["Marketing", "IT", "Non IT", "HR", "Management", "Accounts"],
    datasets: [
      {
        label: "Departments",
        data: [10, 20, 30, 15, 5, 10],
        backgroundColor: [
          "#3498db",
          "#1abc9c",
          "#f1c40f",
          "#e74c3c",
          "#9b59b6",
          "#34495e",
        ],
      },
    ],
  };

  const sourceData = {
    labels: ["Our Portal", "JobPortal", "SocialMedia", "Referral"],
    datasets: [
      {
        label: "Applications by Source",
        data: [0, 0, 0, 0],
        backgroundColor: ["#2ecc71", "#e67e22", "#e74c3c", "#9b59b6"],
      },
    ],
  };

  const recruitmentData = {
    labels: ["Interviewed", "Shortlisted", "Selected", "Rejected"],
    datasets: [
      {
        label: "Recruitment",
        data: [5, 10, 3, 7],
        backgroundColor: "#3498db",
      },
    ],
  };

  const recruitmentOptions = {
    indexAxis: "y", // This turns the Bar chart into a horizontal one
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 space-y-6">
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`relative ${card.color} p-6 rounded-xl shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105`}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            <div className="flex items-center">
              <div className={`text-4xl ${card.iconColor} mr-2`}>
                {card.icon}
              </div>
              <p className="text-4xl font-bold text-gray-800">{card.count}</p>
            </div>
            <div className="absolute right-4 bottom-4 w-16 h-16">
              <CircularProgressbar
                value={card.percentage}
                text={`${card.percentage}%`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Department Wise and Application Source Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="font-semibold mb-4 text-left">Department Wise</h3>
          <div className="flex justify-center gap-2">
            <div className="cursor-pointer">
              <Doughnut data={departmentData} />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-4 text-left">
            Application Received by Source
          </h3>
          <div className="w-full h-64 cursor-pointer">
            <Bar data={sourceData} />
          </div>
        </div>
      </div>

      {/* Recruitment Report */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="font-semibold mb-4">Recruitment Report</h3>
        <div className="w-full h-64 cursor-pointer">
          <Bar data={recruitmentData} options={recruitmentOptions} />
        </div>
      </div>
    </div>
  );
};

export default Hr;
