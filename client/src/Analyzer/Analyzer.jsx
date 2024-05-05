import React, { useState } from "react";
// import { IoMdSend } from "react-icons/io";
// import { BiBot, BiUser } from "react-icons/bi";
import Header from "../organization/Header";
import Footer from "../organization/Footer";

function Analyzer({ setDisplay }) {


  return (



    <div className="mx-auto">
      <Header setDisplay={setDisplay} />
      
      {/* Streamlit Chatbot Integration */}

      <div className="flex justify-center mt-3 mb-3">     
      <iframe
        width="98%"
        height="700"
         src="http://localhost:6050/" 
        
      ></iframe> 
      </div>


      <Footer />
    </div>
  );
}

export default Analyzer;
