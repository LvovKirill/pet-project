import './SideBar.css';
import { FaBeer } from 'react-icons/fa';
import {Link} from "react-router-dom"

function SideBar() {
  return (
  <div className='bg'>
    <ul className='flex_container'>

        <span>О пользователе</span>

<li>
<FaBeer />
<Link to='/home'>главная</Link>
</li>

<li>
<FaBeer />
<Link to='/about'>О нас</Link>
</li>

<li>
<FaBeer />
<Link to='/blog'>блог</Link>
</li>

<div className='dicoration'></div>

<span>О компании</span>

<li>
<FaBeer />
<Link to='/home'>главная</Link>
</li>

<li>
<FaBeer />
<Link to='/about'>О нас</Link>
</li>

<li>
<FaBeer />
<Link to='/blog'>блог</Link>
</li>

<div className='dicoration'></div>


    </ul>
  </div>
    
  );
}

export default SideBar;