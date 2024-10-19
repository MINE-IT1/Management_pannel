import React, { useState } from 'react';
import { FaTasks, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import ProjectDetailsModal from './ProjectDetailsModal';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const summaryData = [
    { title: 'To Do Projects', count: 0, icon: FaTasks, color: 'text-orange-500' },
    { title: 'Ongoing Projects', count: 8, icon: FaSpinner, color: 'text-blue-500' },
    { title: 'Completed Projects', count: 3, icon: FaCheckCircle, color: 'text-green-500' },
  ];

  const projectsData = [
    { name: 'Virtual dressing system', status: 'Normal', progress: 95, progressColor: '#FF4C4C' },
    { name: 'AECearthEDIX', status: 'High', progress: 100, progressColor: '#FF4C4C' },
    { name: 'AECP', status: 'High', progress: 99, progressColor: '#FF4C4C' },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="p-6">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {summaryData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300"
          >
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <div className="flex gap-4 items-center">
              <div className={`text-3xl ${item.color}`}>
                <item.icon />
              </div>
              <p className="text-4xl font-bold">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Title */}
      <h2 className="text-2xl font-semibold mb-4 flex shadow-md border-b-2 pb-2 bg-white w-full rounded-md px-4 py-2">Projects</h2>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span
                className={`px-2 py-1 text-sm rounded ${project.status === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}
              >
                {project.status}
              </span>
            </div>

            {/* Horizontal Line and Progress Text */}
            <hr className="mb-2" />
            <p className="text-center text-sm font-semibold">Project Progress</p>

            <div className="w-24 mx-auto mt-2">
              <CircularProgressbar
                value={project.progress}
                text={`${project.progress}%`}
                styles={buildStyles({
                  pathColor: project.progressColor,
                  textColor: project.progressColor,
                })}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && <ProjectDetailsModal project={selectedProject} closeModal={closeModal} />}
    </div>
  );
};

export default Projects;
