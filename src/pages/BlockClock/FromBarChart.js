import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js";

const FromBarChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  // const data = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
  // const labels = [
  //   "Tháng 1",
  //   "Tháng 2",
  //   "Tháng 3",
  //   "Tháng 4",
  //   "Tháng 5",
  //   "Tháng 6",
  //   "Tháng 7",
  //   "Tháng 8",
  //   "Tháng 9",
  //   "Tháng 10",
  //   "Tháng 11",
  //   "Tháng 12",
  // ];
  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sản lượng sử dụng nước (m3)",
            data: data,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    setChartInstance(newChartInstance);
  }, [data, labels, chartInstance]);

  return (
    <>
      <canvas id="myChart2" ref={chartRef} />
    </>
  );
};

export default FromBarChart;
