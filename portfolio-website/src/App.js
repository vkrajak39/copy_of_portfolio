import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import AcademicAndSkills from "./components/AcademicAndSkills";
import ContactMe from "./components/ContactMe";
import Project from "./components/Project";


function App() {
  return (
    <>
    <div className="container-fluid cf-custom">
    <Navbar/>


    <AcademicAndSkills></AcademicAndSkills>
    <ContactMe/>
    <Footer/>
    <Project></Project>
    </div>
    </>
  );
}

export default App;
