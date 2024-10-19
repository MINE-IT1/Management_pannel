import React, { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Clients from "./Clients/Clients.jsx";
import Hr from "./Hr/Hr.jsx";
import ClientDetails from "./Clients/ClientDetails.jsx";
import Projects from "./Projects/Projects.jsx";
import FinanceOverview from "./finance/FinanceOverview.jsx";
import SalesOverview from "./sales/SalesOverview.jsx";
import BusinessManagementPanel from "./buisness/BusinessManagementPanel.jsx";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  return (
    <Router>
      <div className="flex transition-all duration-700">
        {/* Sidebar */}

        {isSidebarOpen && (
          <div className="lg:fixed h-full">
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
        )}
        <button
          className={`fixed top-6 left-4 text-2xl lg:hidden`}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <FaBars />
        </button>

        {/* Main Content Area */}
        <div className={`lg:ml-64 w-full`}>
          {" "}
          {/* Adjust margin based on Sidebar width */}
          {/* Header */}
          <div className={`lg:fixed top-0  lg:left-64 right-0 z-10 `}>
            {isHeaderOpen && (
              <Header
                isHeaderOpen={isHeaderOpen}
                setIsHeaderOpen={setIsHeaderOpen}
              />
            )}
            <button
              className={`fixed top-4 right-4 text-2xl lg:hidden `}
              onClick={() => setIsHeaderOpen(!isHeaderOpen)}
            >
              <FaBars />
            </button>
          </div>
          {/* Scrollable Content */}
          <div className="mt-16 pt-4 h-[calc(100vh-64px)] overflow-auto bg-gray-100">
            {" "}
            {/* Adjust height based on Header height */}
            <div className="w-full">
              <div className="flex flex-col space-y-4">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/hr" element={<Hr />} />
                  <Route
                    path="/clients/client_details"
                    element={<ClientDetails />}
                  />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/finance" element={<FinanceOverview />} />
                  <Route path="/sales" element={<SalesOverview />} />
                  <Route
                    path="/business"
                    element={<BusinessManagementPanel />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
