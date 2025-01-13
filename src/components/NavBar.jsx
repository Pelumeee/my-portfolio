import { NavLink, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
    const [menuImg, setMenuImg] = useState("/images/open.svg");
    const [showSubMenu, setShowSubMenu] = useState(false);
    const subMenuRef = useRef(null);

    const menuButtonRef = useRef(null);

    const handleSubMenu = () => {
        setShowSubMenu((prev) => !prev);
        setMenuImg(showSubMenu ? "/images/open.svg" : "/images/close.svg");
    };

    const handleClickOutside = (e) => {
        if (subMenuRef.current && !subMenuRef.current.contains(e.target) && !menuButtonRef.current.contains(e.target)) {
            setShowSubMenu(false);
            setMenuImg("/open.svg");
        }
    };

    useEffect(() => {
        if (showSubMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSubMenu]);
    useEffect(() => {
        if (showSubMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ""; 
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [showSubMenu]);

    const closeSubMenu = () => {
        setShowSubMenu(false);
        setMenuImg("/images/open.svg");
    };

    return (
        <header className="w-full flex flex-col items-center justify-center absolute top-[0] z-[100] lg:py-10">
            <nav className="lg:w-[75%] w-[90%] flex items-center justify-between py-4">
                <Link to={"/"}>
                    <h1 className="text-white text-xl font-semibold">Pelumi A.</h1>
                </Link>
                <ul id="big-links" className="hidden md:flex items-center gap-16">
                    <NavLink to={"/"}>
                        <li className="text-white font-medium text-lg p-2">Home</li>
                    </NavLink>
                    <NavLink to={"/projects"}>
                        <li className="text-white font-medium text-lg p-2">Projects</li>
                    </NavLink>
                    <NavLink to={"/about"}>
                        <li className="text-white font-medium text-lg p-2">About</li>
                    </NavLink>
                </ul>
                <img src={menuImg} onClick={handleSubMenu} ref={menuButtonRef} alt="hambugerMenu" className="md:hidden block" />
            </nav>
            {showSubMenu && (
                <div ref={subMenuRef} className="relative w-full bg-[#fff] subMenu min-h-[100vh]">
                    <div className="w-full flex justify-center md:hidden absolute bg-[#000] top-0 bottom-0 pb-10">
                        <div className="w-[90%] py-6">
                            <ul id="small-links" className="flex flex-col gap-4">
                                <NavLink onClick={closeSubMenu} to={"/"}>
                                    <li className="text-white text-sm font-medium  p-2">Home</li>
                                </NavLink>
                                <NavLink onClick={closeSubMenu} to={"/projects"}>
                                    <li className="text-white text-sm font-medium p-2">Projects</li>
                                </NavLink>
                                <NavLink onClick={closeSubMenu} to={"/about"}>
                                    <li className="text-white text-sm font-medium p-2">About</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
