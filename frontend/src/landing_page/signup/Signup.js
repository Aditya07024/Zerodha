import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
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
      username: "",
    });
  };
  return (
    <div className='container'>
      <div className='row mt-5 text-center'>
        <h2 className='mt-5'>Open a free demat and trading account online</h2>

<h3 className='text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>


      </div>
      <div className='row mt-5'>
        <div className='col ms-5'>
          <img src='media/images/account_open.svg' alt='Signup' style={{width:"80%"}}className='img-fluid mt-5 ms-5'></img>
        </div>
        <div className='col'>
          <h1>Signup now</h1>
          <div className="form_container">
      <form onSubmit={handleSubmit} className="col-10">
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            class="form-control"
            onChange={handleOnChange}
          />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

        </div>
        <div>
          <label htmlFor="email" class="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            class="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" class="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            class="form-control"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" class="btn btn-primary m-3">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
        </div>
      </div>
    </div>
  )
}

export default Signup