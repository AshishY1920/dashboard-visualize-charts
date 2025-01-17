import { ChartOptions } from "chart.js";

export const BarChart__options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#333",
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: "#333",
      titleFont: {
        size: 12,
        family: "Lexend",
      },
      bodyFont: {
        size: 12,
        family: "Lexend",
      },
      bodyColor: "#fff",
      cornerRadius: 8,
      displayColors: false,
    },
  },
  layout: {
    padding: {
      left: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#666",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#666",
        padding: 10,
      },
    },
  },
  datasets: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 0.4,
    },
  },
};

export const LineChart__options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#333",
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: "#333",
      titleFont: {
        size: 12,
        family: "Lexend",
      },
      bodyFont: {
        size: 12,
        family: "Lexend",
      },
      bodyColor: "#fff",
      cornerRadius: 8,
      displayColors: false,
    },
  },
  layout: {
    padding: {
      left: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#666",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#666",
        padding: 10,
      },
    },
  },
  datasets: {
    line: {
      borderWidth: 1,
      borderColor: "rgba(255, 99, 132, 1)",
    },
  },
};

export const PieChart__options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 12,
          family: "Lexend",
        },
        color: "#333",
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: "#333",
      titleFont: {
        size: 12,
        family: "Lexend",
      },
      bodyFont: {
        size: 12,
        family: "Lexend",
      },
      bodyColor: "#fff",
      cornerRadius: 8,
      displayColors: false,
    },
  },
  layout: {
    padding: {
      left: 0,
    },
  },
  datasets: {
    pie: {
      borderWidth: 0,
      borderColor: "transparent",
      hoverOffset: 10,
    },
  },
};
