import React from "react"
import "./footer.sass"
import logo from '../../assets/logo.svg'
import icon_facebook from '../../assets/icons/icon_facebook.svg'
import icon_instagram from '../../assets/icons/icon_instagram.svg'
import icon_linkedin from '../../assets/icons/icon_linkedin.svg'
import icon_twitter from '../../assets/icons/icon_twitter.svg'
import icon_youtube from '../../assets/icons/icon_youtube.svg'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__copy">
                <p>©2020 Yourcompany</p>
                <img src={logo} alt="logo" />
                <a className="btn btn__primary" title="Buy" href='#pricing'>Purchase now</a>
            </div>
            <div className="footer__navbar">
                <nav>
                    <a href='/'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#footer'>Contact</a>
                </nav>
                <div className="footer__navbar--social">
                    <a title="facebook" href='/'>
                        <img src={icon_facebook} alt="facebook"></img>
                    </a>
                    <a title="linkedin" href='/'>
                        <img src={icon_linkedin} alt="linkedin"></img>
                    </a>
                    <a title="twitter" href='/'>
                        <img src={icon_twitter} alt="twitter"></img>
                    </a>
                    <a title="youtube" href='/'>
                        <img src={icon_youtube} alt="youtube"></img>
                    </a>
                    <a title="instagram" href='/'>
                        <img src={icon_instagram} alt="instagram"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer