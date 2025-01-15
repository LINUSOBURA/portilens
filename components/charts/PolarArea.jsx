"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function PolarAreaChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "polarArea",
        data: {
          labels: [
            "Fullstack",
            "Frontend",
            "Backend",
            "Mobile",
            "UI/UX",
            "Performance Oprimization",
            "Project Management",
          ],
          datasets: [
            {
              label: "Info",
              data: [60, 80, 25, 20, 90, 69, 80],
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(255, 159, 64, 0.2)",
                "rgb(255, 205, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(153, 102, 255, 0.2)",
                "rgb(201, 203, 207, 0.2)",
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
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: "Career Readiness",
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "30vw", height: "40vh" }}>
      <canvas ref={chartRef} className="flex" />
    </div>
  );
}
