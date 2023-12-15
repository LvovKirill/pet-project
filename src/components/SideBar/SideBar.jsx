import './SideBar.css';
// import { FaBeer } from 'react-icons/fa';
import {Link} from "react-router-dom"
import { BsBarChartFill, BsBookmarkFill,BsCalendarEventFill, BsCartFill,BsFillHouseFill,BsFillMapFill } from "react-icons/bs";
import ItemSB from './ItemSB';

function SideBar() {
  return (
  <div className='bg'>
    <ul className='flex_container'>

        <span>О пользователе</span>

<li>
<BsFillHouseFill />
<Link to='/home'>Профиль</Link>
</li>

<ItemSB link="/home" nameItem="Профиль"/>

<li>
<BsCartFill />
<Link to='/about'>О нас</Link>
</li>

<li>
<BsFillMapFill />
<Link to='/blog'>блог</Link>
</li>

<li>
<BsFillMapFill />
<Link to='/analytics'>Аналитика</Link>
</li>

<div className='dicoration'></div>

<span>О компании</span>

<li>
<BsCalendarEventFill />
<Link to='/home'>главная</Link>
</li>

<li>
<BsBookmarkFill />
<Link to='/about'>О нас</Link>
</li>

<li>
<BsBarChartFill />
<Link to='/blog'>блог</Link>
</li>

<div className='dicoration'></div>


    </ul>
  </div>
    
  );
}

export default SideBar;