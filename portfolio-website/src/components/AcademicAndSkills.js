import React from 'react';
// import photo from 'c:/Users/vkraj/OneDrive/Desktop/my_portfolio/vineet-portfolio-website/src/nyBestPicture-removebg-preview.png';
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CircularProgressBar from "./CircularProgressBar";




// yellow hex #f1b457 rgb 241 180 87
//violet hex #6562f7  rgb 101 98 247
// blue  hex #3aafc9  rgb 58 175 201
//red  hex #f66a61   rgb 246 106 97
//black  hex #222a36   rgb 34 42 54
//grey  hex #3e4651   rgb 62 70 81
//pink hex #ff64bf rgb 255 100 191


















const AcademicAndSkills = () => {

    // const percentage = 30;

    return (
        <>

            {/*********** Academic section  ************* */}
            <segment className="academic-section">
                <h1 className="academic-heading">
                    Academics<span className='fullstop'>.</span>
                </h1>

                <div className="row">
                    <div className="academics-col col-lg-3 col-md-4 col-sm-6 column-skill">
                        <h4 className='academics-h4'>RCC Institute Of <br />
                            Information Technology</h4>
                        <p>2020-2024</p>

                        <div className="skill-progress-bar">
                            <CircularProgressBar percentage={83} text="B.Tech" red="255 " green="255" blue="0" />
                        </div>


                    </div>

                    <div className="academics-col col-lg-3 col-md-4 col-sm-6 column-skill">
                        <h4 className='academics-h4'>Cathedral Mission<br />
                            High School</h4>
                        <p>2018-2020</p>

                        <div className="skill-progress-bar">
                            <CircularProgressBar percentage={87.6} text="Sr. Sesondary" red="255 " green="255" blue="0" />
                        </div>


                    </div>

                    <div className="academics-col col-lg-3 col-md-4 col-sm-6 column-skill">
                        <h4 className='academics-h4'>Cathedral Mission<br />
                            High School</h4>
                        <p>2008-2018</p>

                        <div className="skill-progress-bar">
                            <CircularProgressBar percentage={86.5} text="Secondary" red="255 " green="255" blue="0" />
                        </div>


                    </div>

                </div>
            </segment>



            {/* **********  skill section ********* */}
            <segment id="academic-skill">

                <h1 className='skill-heading'>Skills<span className='fullstop'>.</span> </h1>
                {/* <hr className='underline-skills underline'/> */}
                <div className="web-development skill">
                    <h2 className='skill-h2'>Web Development</h2>

                    <div className="row">

                        <div className="skill-html col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={80} text="HTML" red="255 " green="54" blue="225" />
                            </div>
                        </div>

                        <div className="skill-css col-lg-3 col-md-4 col-sm-6 column-skillcolumn-skill">
                            {/* <h3 className='skill-heading'>CSS</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={70} text="CSS" red="255 " green="54" blue="225" />
                            </div>
                        </div>

                        <div className="skill-javascript col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>JAVASCRIPT</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={65} text="JAVASCRIPT" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                        <div className="skill-sql col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>SQL</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={70} text="SQL" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                        <div className="skill-bootstrap col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>BOOTSTRAP</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={70} text="BOOTSTRAP" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                        <div className="skill-nodejs col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>NODEJS</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={50} text="NODEJS" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                        <div className="skill-reactjs col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>REACTJS</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={60} text="REACTJS" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                        <div className="skill-git col-lg-3 col-md-4 col-sm-6 column-skill">
                            {/* <h3 className='skill-heading'>REACTJS</h3> */}
                            <div className="skill-progress-bar">
                                <CircularProgressBar percentage={65} text="GIT" red="255 " green="54" blue="225" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="programming-languages skill">
                    <h2 className='skill-h2'>Programming Languages</h2>

                    <div className="row">


                        <div className="skill-c++ col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={70} text="C++" red="0" green="255" blue="255" />
                            </div>
                        </div>
                        <div className="skill-c col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={80} text="C" red="0" green="255" blue="255" />
                            </div>
                        </div>
                        <div className="skill-java col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={50} text="JAVA" red="0" green="255" blue="255" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="computer-science-fundamentals skill">
                    <h2 className='skill-h2'>Computer Science Fundamentals</h2>

                    <div className="row">

                        <div className="skill-os col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={75} text="OS" red="82" green="255" blue="99" />
                            </div>
                        </div>
                        <div className="skill-oops col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={60} text="OOPS" red="82" green="255" blue="99" />
                            </div>
                        </div>
                        <div className="skill-networks col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={50} text="Networks" red="82" green="255" blue="99" />
                            </div>
                        </div>
                        <div className="skill-dbms col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={50} text="DBMS" red="82" green="255" blue="99" />
                            </div>
                        </div>
                        <div className="skill-dbms col-lg-3 col-md-4 col-sm-6 ">
                            {/* <h3 className='html-heading'>HTML</h3> */}
                            <div className="html-progress-bar">
                                <CircularProgressBar percentage={60} text="DSA" red="82" green="255" blue="99" />
                            </div>
                        </div>
                    </div>
                </div>

            </segment>

        </>
    );
}

export default AcademicAndSkills;