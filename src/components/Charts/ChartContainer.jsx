import React from 'react';
import './ChartContainer.css'

// import { Line } from 'react-chartjs-2';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import faker from 'faker';


function ChartContainer(props) {
  return (

<div className='line-chart-container'>

<div className='line-chart-header'>

<span className='title'>Динамика выручки за период, руб.</span>

<button className='line-chart-btn'>
<BsThreeDotsVertical className='btn'/>
</button>

</div>
    <div className='line-chart-chart'>
    {props.chart}
    </div>
</div>
  )
}

export default ChartContainer