import React from 'react';
import logo from "../logo3.png";
// import photo from "../myBestPicture.png";


const Footer = ()=>{
var year = new Date();


    return(
    <>
        <div className='footer'>
            <img  className='footer-logo' src={logo} alt="logo" />
            <div className='footer-social'>
            <a className="fa-brands fa-linkedin-in fa-2x"></a>
            <a class="fa-brands fa-instagram fa-2x"></a>
            <a className="fa-brands fa-facebook fa-2x"></a>
            <a class="fa-brands fa-github fa-2x"></a>

            </div>
            <p className='copyright-text'>&copy; {year.getFullYear()} VINEET KUMAR RAJAK</p>

        </div>
    </>);
}

export default Footer;