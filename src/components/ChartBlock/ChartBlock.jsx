import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './ChartBlock.css'

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

function ChartBlock() {
  return (
    <div className='chart_block'>
      <span className='title'>Динамика выручки за период, руб.</span>
      <div className='btn'>
      <BsThreeDotsVertical/>
      </div>

      <Pie className="bar_chart" data={data} />
    
    </div>
    
    
  );
}

export default ChartBlock;