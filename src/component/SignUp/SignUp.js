import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import validateSignUp from "../validation/SignUpvalidation";


function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = validateSignUp(values);
    setErrors(err);
    if (Object.values(err).every((error) => error === "")) {
      navigate("/Login");
    }
  };

  return (
    <div className="pagecontainer fixed top-0 left-0 w-full h-screen flex">
      <div className="colorsection w-10/12 bg-[#00004b] decoration-white p-0 m-0
        justify-center items-center flex">
        <img className="logo1 w-5/12 items-center mb-[8%]" src={logo} alt="logo"  />
      </div>
      <div className="whitesection w-[45%] decoration-white">
        <div className="whitecontent py-[25%] ">
          <h1 className="text-[#18457C] text-3xl font-sans font-extrabold">WELCOME !!</h1>
          <p className="text-[#606060] mt-2 text-lg  font-semibold">Please register to continue</p>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-field-with-label">
              <label htmlFor="username" className="inputlabel font-black text-sm pr-[59%] ">
                Username
                <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer -mt-1">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-9/12 text-lg font-semibold border
                   border-gray-600 rounded-md focus:outline-[#00004b] mt-0.5"
                />
              </div>
              {errors.username && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-15 -mt-2"  
                >{errors.username}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="inputlabel font-black text-sm pr-[53%]">
              <span className="t-2">Email Address </span>
              <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer -mt-1">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-9/12 text-lg font-semibold border
                  border-gray-600 rounded-md focus:outline-[#00004b] mt-0.5"
                />
              </div>
              {errors.email && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-15 -mt-2" 
                >{errors.email}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="inputlabel font-black text-sm pr-[59%] ">
              <span>Password </span> 
              <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer -mt-2.5">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-9/12 text-lg font-semibold border
                  border-gray-600 rounded-md focus:outline-[#00004b] "
                />
              </div>
              {errors.password && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-15 -mt-2" 
                >{errors.password}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="inputlabel font-black text-sm pr-[48%]">
              <span className="t-2">Confirm Password</span> 
              <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer -mt-2.5">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Re-enter your password"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-9/12 text-lg font-semibold border
                  border-gray-600 rounded-md focus:outline-[#00004b] "
                />
              </div>
              {errors.confirm_password && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-15 -mt-2" 
                >
                  {errors.confirm_password}
                </span>
              )}
            </div>
            <button type="submit" className="submitbutton text-white bg-[#18457C] text-lg w-[68%] py-2
             rounded-md font-semibold cursor-pointer transition ease-in-out delay-150  hover:scale-110 
             hover:bg-[#00004b] duration-300 mt-5 mb-4 " >
              SUBMIT
            </button>
            <p><Link to="/" className="alreadyregistered text-[#18457C] text-lg font-bold 
            hover:text-[#00004b]  ">
              Already Registered, Sign in
            </Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
