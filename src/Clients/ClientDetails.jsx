import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ClientDetails = () => {
  // Dummy data array of objects
  const clientData = [
    {
      name: "MINE",
      phone: "6382341074",
      email: "mineit.tech@gmail.com",
      address: "#53, 1st Main Road, Maruthi Layout, RMV 2nd Stage, Sanjay Nagar, Bangalore, Karnataka 560094, India",
      gst: "6382341074",
      projectName: "Virtual Dressing System",
      budget: "₹60,000",
      receivedAmount: "₹0",
      pendingAmount: "₹60,000",
      startDate: "10-06-2024",
      endDate: "31-07-2024",
      totalHours: "450",
      resources: "6",
      progress: 95,
    },
    {
      name: "MINE",
      phone: "6382341074",
      email: "mineit.tech@gmail.com",
      address: "#53, 1st Main Road, Maruthi Layout, RMV 2nd Stage, Sanjay Nagar, Bangalore, Karnataka 560094, India",
      gst: "6382341074",
      projectName: "Virtual Dressing System",
      budget: "₹60,000",
      receivedAmount: "₹60,000",
      pendingAmount: "₹0",
      startDate: "10-06-2024",
      endDate: "31-07-2024",
      totalHours: "450",
      resources: "6",
      progress: 100,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        Client Project Details
      </h1>

      {clientData.map((client, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
        >
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                {client.projectName}
              </h2>
              {/* Grid for aligned rows with colons */}
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Client Name</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.name}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Phone</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.phone}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Email</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.email}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Company Address</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.address}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">GST Number</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.gst}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Project Details:
              </h3>
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Budget</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.budget}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Received</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.receivedAmount}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Pending</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.pendingAmount}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Start Date</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.startDate}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">End Date</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.endDate}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Total Hours</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.totalHours}</p>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <p className="text-gray-600 font-bold col-span-4">Resources</p>
                  <p className="text-gray-600 text-center col-span-1">:</p>
                  <p className="text-gray-600 col-span-7">{client.resources}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col justify-center items-center mt-4">
            <p className="text-gray-600 font-bold mb-2">Project Progress</p>
            <div className="w-24">
              <CircularProgressbar
                value={client.progress}
                text={`${client.progress}%`}
                styles={buildStyles({
                  pathColor: client.progress === 100 ? "#28a745" : "#007bff",
                  textColor: "#007bff",
                  trailColor: "#d6d6d6",
                  textSize: "16px",
                })}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientDetails;
