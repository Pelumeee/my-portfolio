import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const index = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Contact />
            <Footer />
        </>
    );
};

export default index;
