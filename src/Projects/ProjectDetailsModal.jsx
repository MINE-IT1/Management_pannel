import React from 'react';

const ProjectDetailsModal = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/3">
        <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
          ✖
        </button>
        {/* Project Details Header */}
        <h2 className="text-xl font-semibold mb-2">{project.name} Details</h2>
        <hr className="mb-4" />

        {/* Project Name (centered) */}
        <h3 className="text-lg font-semibold text-center mb-4">{project.name}</h3>

        {/* Project Details */}
        <div className="space-y-2">
          <p className="flex justify-between"><span>Project Manager:</span><span>{project.manager || 'Jayamani M'}</span></p>
          <p className="flex justify-between"><span>Total Hours:</span><span>{3058}</span></p>
          <p className="flex justify-between"><span>Start Date:</span><span>01/02/2024</span></p>
          <p className="flex justify-between"><span>End Date:</span><span>30/06/2024</span></p>
          <p className="flex justify-between"><span>Budget:</span><span>₹20,000,000</span></p>
          <p className="flex justify-between"><span>Resources Involved:</span><span>7</span></p>
        </div>
        
        {/* Close Button */}
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded w-full"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
