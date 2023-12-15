import './AnalyticsPage.css';
import ChartBlock from '../components/ChartBlock/ChartBlock'

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
    
  </div>
  );
}

export default AnalyticsPage;