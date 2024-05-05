import React, { useState } from "react";
// import { IoMdSend } from "react-icons/io";
// import { BiBot, BiUser } from "react-icons/bi";
import Header from "../organization/Header";
import Footer from "../organization/Footer";

function ResumeBuilder2({ setDisplay }) {


  return (



    <div className="mx-auto">
      <Header setDisplay={setDisplay} />
      
      {/* Streamlit Chatbot Integration */}

      <div className="flex justify-center mt-5 mb-5">     
      <iframe
        width="98%"
        height="900"
        src="https://www.open-resume.com/resume-builder" 
        
      ></iframe> 
      </div>


      <Footer />
    </div>
  );
}

export default ResumeBuilder2;
