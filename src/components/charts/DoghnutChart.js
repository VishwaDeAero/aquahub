import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, values, colors, title, maxValue }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values, // Live & Dead percentages
        backgroundColor: colors, // Colors
        borderWidth: 0, // Remove border
        cutout: "80%", // Creates the hollow part
        rotation: -150, // Start from bottom
        circumference: 300,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents height overflow
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-[300px] sm:max-w-[350px] mx-auto">
      {/* Chart Container */}
      <div className="relative w-full max-w-[250px] sm:max-w-[300px] h-[250px] sm:h-[300px]">
        <Doughnut data={data} options={options} />
        {/* Center Text */}
        <div className="absolute inset-0 mt-4 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm sm:text-base">{title}</p>
          <p className="text-black text-lg sm:text-xl font-bold">{maxValue}</p>
        </div>
      </div>

      {/* Legend Guide (Responsive) */}
      <div className="">
        {/* Live Indicator */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
            style={{ backgroundColor: colors[0] }}>
          </span>
          <span className="text-gray-600 text-sm sm:text-base">{labels[0]}</span>
          <span className="text-black font-bold text-sm sm:text-base">{values[0]}%</span>
        </div>

        {/* Dead Indicator */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
            style={{ backgroundColor: colors[1] }}></span>
            <span className="text-gray-600 text-sm sm:text-base">{labels[1]}</span>
            <span className="text-black font-bold text-sm sm:text-base">{values[1]}%</span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;