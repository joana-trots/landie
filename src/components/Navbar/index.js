import React, { useState } from "react"
import "./navbar.sass"
import logo from '../../assets/logo.svg'
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = ({navbarLinks}) => {
    const [menuClicked, setMenuClicked] = useState(false);
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <div className={menuClicked ? "navbar navbar--active" : "navbar"}>
            {menuClicked ? (<FiX size={25} onClick={toggleMenuClick} className="navbar__icon"/>) : (<FiMenu size={25} onClick={toggleMenuClick} className="navbar__icon" />)}
            <nav>
                {navbarLinks.map(item => {
                    return <a href={item.url} title={item.title} key={item.title}>{item.title}</a>
                })}
            </nav>
            <img src={logo} alt="logo" className="navbar__logo"></img>
            <a className="btn btn__primary" title="Buy Now" href='#pricing'>Buy Now</a>
        </div>
    )
}

export default Navbar