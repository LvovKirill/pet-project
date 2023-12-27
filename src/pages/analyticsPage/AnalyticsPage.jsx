import './AnalyticsPage.css';
// import ChartBlock from '../../components/ChartBlock/ChartBlock'
import LineChart from '../../components/Charts/LineChart/LineChart.jsx';
import ChartContainer from '../../components/Charts/ChartContainer';
import HorizontalBarChart from '../../components/Charts/HorizontalBarChart/HorizontalBarChart';
import PieChart from '../../components/Charts/PieChart/PieChart.jsx';
import AreaChart from '../../components/Charts/AreaChart/AreaChart.jsx';
import PolarAreaChart from '../../components/Charts/PolarAreaChart/PolarAreaChart.jsx';
import RadarChart from '../../components/Charts/RadarChart/RadarChart.jsx';

const AnalyticsPage = () => {
  return (
  <div className='analytics_page'>
    <h1 className='analytics_page_h1'>Аналитика</h1>
    
    <div className='wrap_charts'>

      <div className='chart1'>
      <ChartContainer chart={<HorizontalBarChart/>}/>
      </div>

      <div className='chart2'>
      <ChartContainer chart={<PieChart/>}/>
      </div>

      <div className='chart3'>
      <ChartContainer chart={<PolarAreaChart/>}/>
      </div>

      <div className='chart4'>
      <ChartContainer chart={<LineChart/>}/>
      </div>

      <div className='chart5'>
      <ChartContainer chart={<AreaChart/>}/>
      </div>

      <div className='chart6'>
      <ChartContainer chart={<RadarChart/>}/>
      </div>


      </div>
  </div>
  );
}

export default AnalyticsPage;