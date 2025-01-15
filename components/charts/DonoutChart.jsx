"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: ["Visual Design", "Content", "Readiness"],
          datasets: [
            {
              label: "Info",
              data: [50, 60, 70],
              backgroundColor: [
                "rgb(255, 99, 132, 0.9)",
                "rgb(255, 159, 64, 0.9)",
                "rgb(255, 205, 86, 0.9)",
                "rgb(75, 192, 192, 0.9)",
                "rgb(54, 162, 235, 0.9)",
                "rgb(153, 102, 255, 0.9)",
                "rgb(201, 203, 207, 0.9)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "30vw", height: "40vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
