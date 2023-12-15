import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import AnalyticsPage from './pages/AnalyticsPage';
// import SideBar from './components/SideBar';
import Window from './components/Window';

function App() {
  return (
<>
  <Routes>
    <Route path='/' element={<Window/>}>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/analytics' element={<AnalyticsPage/>}/>
    </Route>
  </Routes>
</>
    
  );
}

export default App;
