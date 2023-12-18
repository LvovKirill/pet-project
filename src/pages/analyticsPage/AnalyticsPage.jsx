import './AnalyticsPage.css';
import ChartBlock from '../../components/ChartBlock/ChartBlock'
import { LineChart } from '../../components/Charts/LineChart/LineChart';

const AnalyticsPage = () => {
  return (
  <div className='analytics_page'>
    <h1 className='analytics_page_h1'>Аналитика</h1>
    <div className='analytics_page_c1'>
  <ChartBlock/>
  <ChartBlock/>
    </div>

    <div className='analytics_page_c1'>
  <ChartBlock/>
  <ChartBlock/>
    </div>

    <div className='analytics_page_c1'>
  <LineChart/>
  <ChartBlock/>
    </div>


    
  </div>
  );
}

export default AnalyticsPage;