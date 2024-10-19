import React, { useState } from "react";
import { AiOutlineMail, AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { BsChat, BsTelephone } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import AddClientForm from "./AddClientForm";

const clientsData = [
  {
    name: "MINE",
    project: "Virtual dressing system",
    email: "mine@example.com",
    phone: "+1234567890",
  },
  {
    name: "RSP Design Consultants",
    project: "Prestige Park Groove",
    email: "rsp@example.com",
    phone: "+9876543210",
  },
  {
    name: "Suvarna Wakchaure",
    project: "Testing 2",
    email: "suvarna@example.com",
    phone: "+1122334455",
  },
];

const Clients = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClient = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-6xl p-4">
        <header className="flex justify-between items-center flex-wrap mb-20">
          <h1 className="text-2xl font-semibold font-serif uppercase text-gray-800 bg-gradient-to-r from-indigo-400 to-red-400 bg-clip-text text-transparent tex p-4 rounded-md">
            Clients
          </h1>

          <button
            className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:bg-purple-600"
            onClick={handleAddClient}
          >
            Add Client
          </button>
        </header>

        {/* Clients List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {clientsData.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 relative mb-10"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {client.image ? (
                  <img
                    src={client.image}
                    alt="client"
                    className="rounded-full w-20 h-20 border-2 border-gray-200"
                  />
                ) : (
                  <div className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-gray-300 bg-gray-100">
                    <AiOutlineUser className="text-gray-400 w-12 h-12" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mt-16">{client.name}</h3>
              <p className="text-gray-600 mb-4">{client.project}</p>

              <div className="flex justify-center space-x-4 my-4">
                <AiOutlineMail className="text-red-500 text-2xl cursor-pointer" />
                <BsChat className="text-blue-500 text-2xl cursor-pointer" />
                <BsTelephone className="text-green-500 text-2xl cursor-pointer" />
              </div>
              <hr />
              <NavLink to="client_details">
                <AiOutlineEye className="text-2xl text-gray-700 cursor-pointer mx-auto" />
              </NavLink>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className=" w-3/4 max-w-2xl"> {/* Adjusted width here */}
      <AddClientForm onClose={closePopup} />
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Clients;
