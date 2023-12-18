import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import AnalyticsPage from './pages/analyticsPage/AnalyticsPage';
// import SideBar from './components/SideBar';
import Window from './components/Window';
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react';

function App() {
  let [isAvtorizate, setIsAvtorizate] = useState(true)
  // if (isAvtorizate){
  return(
  <>
  <Routes>
    <Route path='/' element={isAvtorizate ? <Window/> : <RegisterPage setIsAvtorizate={setIsAvtorizate}/>}>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/analytics' element={<AnalyticsPage/>}/>
    </Route>
  </Routes>
  </>
  )
  // }
  // return (<RegisterPage/>);

  
}

export default App;
