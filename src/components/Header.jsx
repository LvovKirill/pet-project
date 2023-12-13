import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="container3">

        <div className='logo'>
            <img src='logo192.png' alt='img'/>
            <span>PetProject</span>
        </div>

        <div className='user'>
            <img src='ava.jpg' alt='img'/>
            <span>Львов К.О.</span>
        </div>

        </div>
    </div>
    
    
  );
}

export default Header;