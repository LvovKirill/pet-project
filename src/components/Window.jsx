import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from './Header';

const Window = () => {
    return (


        <div className="container1">

                <Header className="Header"/>
                <SideBar className="SideBar"/>
                <div className="wrap_outlet">
                <Outlet className="Outlet"/>
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