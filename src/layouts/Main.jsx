import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="fixed top-0 z-10 w-full md:w-[1280px] ">
                <Navbar />
            </div>
            <div className='pt-20'>
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Main;
