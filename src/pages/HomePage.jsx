
// import { useState } from 'react';
import BlockProgressBar from '../components/BlockProgressBar/BlockProgressBar.jsx';
// import CicleProgressBar from '../components/BlockProgressBar/CicleProgressBar.jsx';
import './HomePage.css';
import ChartBlock from '../components/ChartBlock/ChartBlock.jsx'
import { useEffect, useState } from 'react';


const HomePage = () => {

const [file, setFile] = useState(null);
const [fileDataURL, setFileDataURL] = useState('profile_img.jpg');

const changeHandler = (e) => {
  const file = e.target.files[0];

  setFile(file);
}

useEffect(()=>{
  console.log('useEffect сработал')
  let fileReader, isCancel = false;
  if(file){
    fileReader = new FileReader();
    fileReader.onload = (e) => {
      const {result} = e.target;
      if(result && !isCancel){
        setFileDataURL(result)
      }
    }
    fileReader.readAsDataURL(file);
  }
}, [file])



  return (
  <div className='home_page'>

    <h1>Профиль</h1>
    <div className='home_page_c1'>


      <div className='home_page_c3'>
        <img className='home_page_img' src={fileDataURL} alt='profile_img.jpg'></img>
        <input className='input' type='file' onChange={changeHandler}/>
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

        <ChartBlock type="pie" className="ChartBlock"/>


    </div>
  </div>
  );

}

export default HomePage;