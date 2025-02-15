import React from "react";
import { Doughnut } from "react-chartjs-2";

const GaugeChart = ({ label, value, maxValue }) => {
  // Calculate the percentage value
  const percentage = Math.round((value / maxValue) * 100);

  // Data for the Doughnut chart
  const data = {
    datasets: [
      {
        data: [value, maxValue - value], // Actual and remaining values
        backgroundColor: ["#4CAF50", "#E0E0E0"], // Green for actual, gray for remaining
        borderWidth: 0,
        cutout: "80%", // Adjust the inner radius for the gauge effect
      },
    ],
  };

  // Options for the Doughnut chart
  const options = {
    rotation: -90, // Start from the top
    circumference: 180, // Half-circle (gauge)
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips for simplicity
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      {/* Display percentage below the chart */}
      <div className="text-center">
        <h4 className="font-bold">{label}</h4>
        <p className="text-gray-500">
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default GaugeChart;