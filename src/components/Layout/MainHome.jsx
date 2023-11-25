import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar";
import Footer from "../Sheard/Footer";


const MainHome = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;