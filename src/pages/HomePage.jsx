import './HomePage.css';
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
  <>
  <h1>HomePagem</h1>
  <Link to='/blog'>блог</Link>
  </>
  );
}

export default HomePage;