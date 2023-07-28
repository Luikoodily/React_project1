import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import validateLogin from "../validation/Loginvalidation";


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = validateLogin(values);
    setErrors(err);
    if (Object.values(err).every((error) => error === "")) {
      navigate("/Home");
    }
  };

  return (
    <div className="pagecontainer fixed top-0 left-0 w-full h-screen flex">
      <div className="colorsection w-10/12 bg-[#00004b] decoration-white p-0 m-0
      justify-center items-center flex">
        <img className="logo1 w-5/12 items-center mb-[8%]" src={logo} alt="logo" />
      </div>
      <div className="whitesection w-[45%] decoration-white">
        <div className="whitecontent py-[30%]">
          <h1 className="text-[#18457C] text-3xl font-sans font-extrabold"
          >LOGIN</h1>
          <p className="text-[#606060] mt-2 text-lg font-semibold "
          >Please login to continue.</p>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-field-with-label">
              <label htmlFor="username" className="inputlabel font-black text-sm pr-[54%]">
                Username <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer mt-0">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-[69%] text-lg font-semibold border
                  border-[#606060] rounded-md focus:outline-[#00004b] mt-0.5 mb-7"
                />
              </div>
              {errors.username && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-6 -mt-7 mb-3 "
                >{errors.username}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="password" className="inputlabel font-black text-sm pr-[54%]">
                Password <span className="text-red-600">*</span>
              </label>
              <div className="inputcontainer mt-0">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  className="inputfield m-2 p-2 w-[69%] text-lg font-semibold border
                  border-[#606060] rounded-md focus:outline-[#00004b] mt-0"
                />
              </div>
              {errors.password && (
                <span className="textdanger text-red-600 text-sm pl-16 flex ml-6 -mt-2"
                >{errors.password}</span>
              )}
            </div>
            <button type="submit" className="submitbutton text-white bg-[#18457C] text-lg w-[65%] py-2
            rounded-md font-semibold cursor-pointer transition ease-in-out delay-150  hover:scale-105 
            hover:bg-[#00004b] duration-300 mt-5 mb-4 ">
              LOGIN
            </button>
            <p className="already-registered">
              <Link to="/signup" className="NewUser text-[#18457C] text-lg font-bold 
              hover:text-[#00004b] ">
                {" "}
                New User? Register{" "}
              </Link>{" "}
              |
              {" "} <Link to="/forgotpassword" className="ForgotPassword text-[#18457C] text-lg font-bold 
              hover:text-[#00004b] ">
                Forgot Password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
