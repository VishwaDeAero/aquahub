import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
  } from "chart.js";
  
  // Register all required Chart.js components globally
  ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
  );