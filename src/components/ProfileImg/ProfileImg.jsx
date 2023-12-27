import './ProfileImg.css'

import { useEffect, useState } from 'react';



function ProfileImg() {

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
    <div className='profile-img-container'>
        <img className='profile-img' src={fileDataURL} alt='profile_img.jpg'></img>
        <input className='profile-img-input' type='file' onChange={changeHandler}/>
    </div>
  );
}

export default ProfileImg;