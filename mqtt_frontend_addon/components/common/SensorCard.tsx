import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
  datasets: [
    {
      label: "Occupancy",
      data: [30, 50, 40, 60, 70, 90, 80, 100],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const OccupancyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Occupancy</h2>
      <div className="relative h-40">
        <Line data={data} options={options} />
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          Current Occupancy: <span className="font-bold">75%</span>
        </p>
        <p className="text-gray-600">
          Peak Occupancy: <span className="font-bold">90%</span>
        </p>
      </div>
    </div>
  );
};

export default OccupancyCard;
