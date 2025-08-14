import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
                    window.location.href = "https://zerodha-dashboard-sosp.onrender.com";

        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
  <>
  <div className="form_container m-2 pt-5" style={{display: "flex",flexDirection: "column",alignItems: "center",}}>
      <h2 className="mt-5">Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" class="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email" class="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" class="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password} class="form-control"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>

  </>
  )};

export default Login;