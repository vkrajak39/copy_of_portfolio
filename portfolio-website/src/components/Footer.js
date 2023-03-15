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
            <a href='https://in.linkedin.com/in/vineet-kumar-rajak-321a961bb?trk=people-guest_people_search-card' className="fa-brands fa-linkedin fa-2x custom-font-icon"></a>
            <a href='https://www.instagram.com/vkr739/' class="fa-brands fa-instagram fa-2x custom-font-icon"></a>
            <a href='https://hi-in.facebook.com/vineetkumar.rajak.77' className="fa-brands fa-facebook fa-2x custom-font-icon"></a>

            <a href='mailto:vkrajak39@gmail.com?' className=" fa-regular fa-envelope fa-2x custom-font-icon"></a>
            <a href='https://github.com/vkrajak39' class="fa-brands fa-github fa-2x custom-font-icon"></a>

            </div>
            <p className='copyright-text'>&copy; {year.getFullYear()} VINEET KUMAR RAJAK</p>

        </div>
    </>);
}

export default Footer;