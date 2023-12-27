import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';
// import { BsThreeDotsVertical } from 'react-icons/bs';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
    },
  ],
};


function PieChart(props) {
  return (
    // <div className='chart-block'>
    //   <span className='chart-block-title'>Динамика выручки за период, руб.</span>
    //   <button className='chart-block-btn'>
    //   <BsThreeDotsVertical className='pie-chart-btn'/>
    //   </button>
      <Pie className="chart-block-chart" data={data} />
    // </div>

  );
}

export default PieChart;