import React, { useState } from 'react';
// import TypewriterEffect from "../components/TypewriterEffect";



const ContactMe = () => {


    // ************ typewriter code
// var  [text, setText] =  useState( "connect");



// let position = document.getElementById("typeWriter");


// var index=1;


// function TypewriterEffect() {

    
//     // setText(text.slice(0,index));
//         let new_text =text.slice(0,index);
//         position.innerHTML=new_text;
//         index>text.length()?index=1:index++;
//         setInterval(TypewriterEffect(),300);

// }










return (
    <>  <section className='contactMe'></section>
        <div className="row">
            <div className="col-lg-7 col-md  align-left">
                <h1 className='contact-me-big-heading'>Let's <i  class="fas fa-arrow-right blue-tint"></i> <br /> <span className='typeWriter'>connect</span></h1>



                <div className="contact-me-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat voluptate non eum qui minus pariatur perferendis eos illum illo quibusdam, nobis est reiciendis. Illo ipsa at impedit dolorum repellendus saepe iusto corrupti consequuntur voluptatem veritatis odit laudantium, quam quae nesciunt eveniet voluptas consequatur ullam recusandae obcaecati quaerat maiores molestias.</div>
            </div>
            <div className="col-lg-5 col-md  align-left">
                
                
                <form action="submit" className="form">
                    <h3 className='form-heading'>Your name:</h3>
                    <input className='form-input' type="text"  />

                    <h3 className='form-heading'>Your email address:</h3>
                    <input className='form-input' type="email"  />

                    <h3 className='form-heading'>Message:</h3>
                    <textarea className='form-input' type="text"  />
                    <br />
                    <input className='form-btn' type="submit" value="Send" /><i  class="fas fa-arrow-right  fa-3x blue-tint"></i>

                </form>
            </div>
        </div>


        <div className="round-absolute open-contact-me">Open for<br /> new projects</div>
        
    </>

);
}

export default ContactMe