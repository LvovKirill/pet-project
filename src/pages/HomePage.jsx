
import BlockProgressBar from '../components/BlockProgressBar/BlockProgressBar.jsx';
// import CicleProgressBar from '../components/BlockProgressBar/CicleProgressBar.jsx';
import './HomePage.css';
// import ChartBlock from '../components/ChartBlock/ChartBlock.jsx'

const HomePage = () => {


  return (
  <div className='home_page'>

    <h1>Профиль</h1>
    <div className='home_page_c1'>


      <div className='home_page_c3'>
        <img className='home_page_img' src='profile_img.jpg' alt='error'></img>
        <input type='file'/>
      </div>

        <ul className='home_page_c2'>

          <li>
            <span className='gray_text'>Имя</span>
            <span className='black_text'>Львов Кирилл Олегович</span>
          </li>

          <li>
            <span className='gray_text'>Пол</span>
            <span className='black_text'>Мужской</span>
          </li>

          <li>
            <span className='gray_text'>Имя</span>
            <span className='black_text'>02.05.12</span>
          </li>

          <li>
            <span className='gray_text'>Гражданство</span>
            <span className='black_text'>РФ</span>
          </li>

        </ul>

        <BlockProgressBar className="BlockProgressBar1"/>
        <BlockProgressBar className="BlockProgressBar2"/>

    </div>
  </div>
  );

}

export default HomePage;