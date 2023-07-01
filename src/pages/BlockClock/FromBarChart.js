import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";

const FromBarChart = () => {
  const chartRef = useRef(null);
  // const [chartInstance, setChartInstance] = useState(null);
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ sử dụng nước",
      },
    },
    barThickness: 10,
  };

  const labels = [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ];

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => getRandomNumber(0, 140)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => getRandomNumber(0, 140)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // useEffect(() => {
  //   if (chartInstance) {
  //     chartInstance.destroy();
  //   }

  //   const myChartRef = chartRef.current.getContext("2d");
  //   const newChartInstance = new Chart(myChartRef, {
  //     type: "bar",
  //     data: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "Sản lượng sử dụng nước (m3)",
  //           data: data,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  //   setChartInstance(newChartInstance);
  // }, [data, labels, chartInstance]);

  return (
    <>
      <canvas id="myChart2" ref={chartRef} />
      <Bar options={options} data={data} updateMode="resize" />
    </>
  );
};

export default FromBarChart;
