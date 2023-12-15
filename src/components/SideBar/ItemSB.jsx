import './SideBar.css';
// import { FaBeer } from 'react-icons/fa';
import {Link} from "react-router-dom"
import { BsFillHouseFill } from "react-icons/bs";
import './SideBar.css';

function ItemSB(props) {
  return (
    <li>
    <div className='wrap_icon'><BsFillHouseFill /></div>
    <Link to={props.link}>{props.nameItem}</Link>
    </li>
    
  );
}

export default ItemSB;