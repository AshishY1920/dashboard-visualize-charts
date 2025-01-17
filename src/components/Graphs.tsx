import { useEffect, useRef, Fragment } from "react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  BarChart__options,
  LineChart__options,
  PieChart__options,
} from "../middleware/options";

// Register necessary Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

interface CategoryChartProps {
  data: { [key: string]: number }; // Data object for the chart
  type: "bar" | "line" | "pie"; // Chart type
  title?: string; // Chart title
}

const Graphs = ({ data, type, title }: CategoryChartProps) => {
  const chartRef = useRef<any>(null);

  const categories = Object.keys(data);
  const values = Object.values(data);

  // Define a color palette for the charts
  const colors = [
    "rgba(72, 126, 176, 0.8)",
    "rgba(204, 102, 51, 0.8)",
    "rgba(102, 204, 153, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(54, 162, 235, 0.8)",
  ];

  // For bar charts, assign a unique color to each bar
  const backgroundColors =
    type === "bar"
      ? categories.map((_, index) => colors[index % colors.length]) // Repeat colors if there are more categories than colors
      : type === "pie"
      ? colors.slice(0, categories.length) // Use distinct colors for each pie slice
      : colors[0]; // Single color for line charts

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: backgroundColors,
        borderColor: "#BE3144",
        fill: type === "line", // Fill only for line charts
        tension: 0.4, // Smooth curves for line charts
        borderRadius: type === "bar" ? 30 : 0, // Rounded corners only for bars
        hoverOffset: type === "pie" ? 10 : undefined, // Adds hover effect for pie chart
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    // Cleanup the chart instance when the component is unmounted
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <Fragment>
      {type === "bar" && (
        <Bar ref={chartRef} data={chartData} options={BarChart__options} />
      )}
      {type === "line" && (
        <Line ref={chartRef} data={chartData} options={LineChart__options} />
      )}
      {type === "pie" && (
        <Pie ref={chartRef} data={chartData} options={PieChart__options} />
      )}
    </Fragment>
  );
};

export default Graphs;
