import React, { useState, useEffect } from "react";
import { CalendarIcon, SunIcon, CloudIcon, MoonIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardView = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("Start your day with positivity!");
  const [icon, setIcon] = useState(<SunIcon className="h-6 w-6 text-yellow-500" />);
  const [currentMonth, setCurrentMonth] = useState(currentTime.getMonth());
  const [currentYear, setCurrentYear] = useState(currentTime.getFullYear());
  const [today, setToday] = useState(currentTime.getDate());

  // Fetch random motivational quote using axios
  useEffect(() => {
    axios.get("https://zenquotes.io/api/random")
      .then((response) => {
        console.log(response)
        setQuote(response.data[0].q); // Set the quote
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();

    // Set greeting based on time of day
    if (hours < 12) {
      setGreeting("Good Morning");
      setIcon(<SunIcon className="h-6 w-6 text-yellow-500" />);
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
      setIcon(<CloudIcon className="h-6 w-6 text-blue-500" />);
    } else {
      setGreeting("Good Evening");
      setIcon(<MoonIcon className="h-6 w-6 text-gray-700" />);
    }

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

  const handlePreviousMonth = () => {
    const newDate = new Date(currentYear, currentMonth - 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setToday(null); // No highlighted date for other months
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setToday(null); // No highlighted date for other months
  };

  // Financial Progress Data (Sample Data for Graph)
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [0.4, 0.5, 0.8, 0.3, 0.9, 1.0, 0.7],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Financial Progress (Revenue)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1.0,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4">
      {/* Financial Progress Card */}
      <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700">Financial Progress</h2>
        <div className="mt-4">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Calendar & Greeting Card */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <button onClick={handlePreviousMonth}>
            <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
          </button>
          <h2 className="text-xl font-semibold text-gray-700">
            {monthName} ~ {currentYear}
          </h2>
          <button onClick={handleNextMonth}>
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="mt-6 w-full grid grid-cols-7 gap-2 text-center">
          {/* Days of the week */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-gray-500 text-sm">{day}</div>
          ))}

          {/* Dynamically generating days */}
          {[...Array(daysInMonth).keys()].map((day) => (
            <div
              key={day + 1}
              className={`h-8 w-8 flex items-center justify-center rounded-full ${
                today === day + 1 && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
                  ? "bg-blue-500 text-white"
                  : "text-gray-700"
              }`}
            >
              {day + 1}
            </div>
          ))}
        </div>

        {/* Greeting Section */}
        <div className="mt-8 w-full flex flex-col items-center">
          <div className="flex items-center space-x-2">
            {icon}
            <p className="text-xl font-semibold text-gray-700">{greeting}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
