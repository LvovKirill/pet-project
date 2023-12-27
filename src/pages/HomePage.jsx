
// import { useState } from 'react';
import BlockProgressBar from '../components/BlockProgressBar/BlockProgressBar.jsx';
import ChartContainer from '../components/Charts/ChartContainer.jsx';
import PieChart from '../components/Charts/PieChart/PieChart.jsx';
import ProfileImg from '../components/ProfileImg/ProfileImg.jsx';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo.jsx';
// import CicleProgressBar from '../components/BlockProgressBar/CicleProgressBar.jsx';
import './HomePage.css';

// import { useEffect, useState } from 'react';


const HomePage = () => {

// const [file, setFile] = useState(null);
// const [fileDataURL, setFileDataURL] = useState('profile_img.jpg');

// const changeHandler = (e) => {
//   const file = e.target.files[0];

//   setFile(file);
// }

// useEffect(()=>{
//   console.log('useEffect сработал')
//   let fileReader, isCancel = false;
//   if(file){
//     fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       const {result} = e.target;
//       if(result && !isCancel){
//         setFileDataURL(result)
//       }
//     }
//     fileReader.readAsDataURL(file);
//   }
// }, [file])



  return (
  <div className='home_page'>

    <h1>Профиль</h1>
    <div className='home_page_container'>

      <div className="home_page_c1">
      <ProfileImg />
      </div>

      <div className="home_page_c2">
      <ProfileInfo />
      </div>

      <div className="home_page_c3">
      <BlockProgressBar />
      </div>

      <div className="home_page_c4">
      <BlockProgressBar />
      </div>

      <div className="home_page_c5">
      <ChartContainer chart={<PieChart type="pie" />} />
      </div>


    </div>
  </div>
  );

}

export default HomePage;