import "./App.css";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import ForgotPassword from "./component/ForgotPassword/forgotpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
