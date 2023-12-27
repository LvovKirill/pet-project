import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const options = {
//   responsive: true,
//   interaction: {
//     mode: 'index',
//     intersect: false,
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart - Multi Axis',
//     },
//   },
//   scales: {
//     y: {
//       type: 'linear',
//       display: true,
//       position: 'left',
//     },
//     y1: {
//       type: 'linear',
//       display: true,
//       position: 'right',
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 0, 5, 8, 6, 1, 10],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: [1, 10, 5, 8, 9, 11, 10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

function LineChart() {
  return (
<Line className="bar_chart" data={data}/>
  );
}

export default LineChart;