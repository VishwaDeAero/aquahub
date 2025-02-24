import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }) => {
  return (
    <div className="flex items-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;