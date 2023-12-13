import './HomePage.css';
import ChartBlock from '../components/ChartBlock/ChartBlock'

const HomePage = () => {
  return (
  <div className='home_page'>
    <div className='home_page_c1'>
  <ChartBlock/>
  <ChartBlock/>
    </div>

    <div className='home_page_c1'>
  <ChartBlock/>
  <ChartBlock/>
    </div>
    
  </div>
  );
}

export default HomePage;