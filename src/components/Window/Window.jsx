import { Outlet } from "react-router-dom";
import '../Window/Window.css';
import SideBar from "../SideBar/SideBar.jsx";
import Header from "../Header/Header.jsx";

const Window = () => {
    return (


        <div className="container">

                <Header/>

                <div className="wrapper">
                <SideBar/>
                <div className="wrap_outlet">
                <Outlet className="Outlet"/>
                </div>
                </div>
                

        {/* //     <div className="wrap_header">
        //     <Header className="Header"/>
        //     </div>

        //     <div className="wrap_maiin">
            <SideBar className="SideBar"/>
        //     <Outlet className="Outlet"/>
        //     </div> */}
        </div>



    );
  }
  
export default Window;