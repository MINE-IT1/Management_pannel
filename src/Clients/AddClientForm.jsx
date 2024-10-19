import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddClientForm = ({ onClose }) => {
  // State to handle form data
  const [formData, setFormData] = useState({
    clientName: "",
    phoneNumber: "",
    emailAddress: "",
    gstNumber: "",
    projectName: "",
    projectBudget: "",
    companyAddress: "",
  });

  // Error state to manage validation feedback
  const [errors, setErrors] = useState({});

  // Handle change in input fields with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Basic validation on change for phoneNumber and gstNumber
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return; // Only allow numeric input for phone number
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for the current field once it is corrected
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error when input is changed
    }));
  };

  // Validation function to check if the input fields meet criteria
  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    if (!formData.clientName.trim() || formData.clientName.trim().length < 3) {
      newErrors.clientName = "Enter valid name.";
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 3) {
      newErrors.phoneNumber = "Phone number is not valid.";
    }

    if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should contain only numbers.";
    }

    if (!formData.emailAddress.trim() || formData.emailAddress.trim().length < 3) {
      newErrors.emailAddress = "Email address is not valid.";
    }

    if (!formData.gstNumber.trim() || formData.gstNumber.trim().length !== 15) {
      newErrors.gstNumber = "GST number must be exactly 15 characters long.";
    }

    if (!formData.projectName.trim() || formData.projectName.trim().length < 3) {
      newErrors.projectName = "Give a Valid Project name.";
    }

    if (!formData.projectBudget.trim() || formData.projectBudget.trim().length < 3) {
      newErrors.projectBudget = "Provide valid project budget.";
    }

    if (!formData.companyAddress.trim() || formData.companyAddress.trim().length < 3) {
      newErrors.companyAddress = "Provide a Valid Address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before submitting the form
    if (validateForm()) {
      console.log("Form Submitted", formData);
      alert("Form Submitted Successfully");

      // Clear the form after successful submission
      setFormData({
        clientName: "",
        phoneNumber: "",
        emailAddress: "",
        gstNumber: "",
        projectName: "",
        projectBudget: "",
        companyAddress: "",
      });
    } else {
      alert("Please Fill The Valid Data");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>

        {/* Form Heading */}
        <h1 className="text-2xl font-semibold mb-2 text-gray-800 text-left">
          New Client
        </h1>
        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-6" />

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Client Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Enter client name"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.clientName && <span className="text-red-500 text-sm">{errors.clientName}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              min={10}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter email address"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.emailAddress && <span className="text-red-500 text-sm">{errors.emailAddress}</span>}
          </div>

          {/* Company GST Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Company GST Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="Enter GST number"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.gstNumber && <span className="text-red-500 text-sm">{errors.gstNumber}</span>}
          </div>

          {/* Project Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Enter project name"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.projectName && <span className="text-red-500 text-sm">{errors.projectName}</span>}
          </div>

          {/* Project Budget */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Project Budget <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleChange}
              placeholder="Enter project budget"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.projectBudget && <span className="text-red-500 text-sm">{errors.projectBudget}</span>}
          </div>

          {/* Company Address */}
          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium">
              Company Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="companyAddress"
              rows="3"
              value={formData.companyAddress}
              onChange={handleChange}
              placeholder="Enter company address"
              className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            {errors.companyAddress && <span className="text-red-500 text-sm">{errors.companyAddress}</span>}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientForm;
