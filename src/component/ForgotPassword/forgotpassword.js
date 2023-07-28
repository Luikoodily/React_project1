import React from "react";
import logo from "../images/logo.jpg";

const forgotpassword = () => {
  return (
    <div className="pagecontainer fixed top-0 left-0 w-full h-screen flex">
      <div className="colorsection w-10/12 bg-[#00004b] decoration-white p-0 m-0
      justify-center items-center flex">
        <img className="logo1 w-5/12 items-center mb-[8%]" src={logo} alt="logo" />
      </div>
      <div className="whitesection w-[45%] decoration-white">
        <div className="whitecontent py-[30%]" >
          <h1 className="text-[#18457C] text-3xl font-sans font-extrabold mb-6"
          >FORGOT PASSWORD</h1>         
          <div className="input-field-with-label">
            <label htmlFor="username" className="inputlabel font-black text-sm pr-[54%]">
              Username <span className="text-red-600">*</span>
            </label>
            <div className="inputcontainer mt-0">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="inputfield m-2 p-2 w-[69%] text-lg font-semibold border
                border-[#606060] rounded-md focus:outline-[#00004b] mt-0"
              />
            </div>
          </div>
          <div className="input-field-with-label">
            <label htmlFor="password" className="inputlabel font-black text-sm pr-[54%]">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="inputcontainer mt-0">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="inputfield m-2 p-2 w-[69%] text-lg font-semibold border
                border-[#606060] rounded-md focus:outline-[#00004b] mt-0"
              />
            </div>
          </div>
          <button className="submitbutton text-white bg-[#18457C] text-lg w-[65%] py-2
          rounded-md font-semibold cursor-pointer transition ease-in-out delay-150  hover:scale-105 
          hover:bg-[#00004b] duration-300 mt-5 mb-4">RESET</button>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
