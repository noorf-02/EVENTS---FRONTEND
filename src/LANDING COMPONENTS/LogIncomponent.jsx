import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function LogIncomponent() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const[message, setMessage] = useState('');

  function getInput(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function submitForm(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/log-in", user);
      console.log('loggin res' , res.data)
      localStorage.setItem('token', res.data.token);
      setMessage(res.data.message);
      const role = res.data.role;
      if(role==='attendee'){
        navigate('/attendee-dashboard')
      };
      if(role==='organizer'){
        navigate('/host-dashboard')
      }
    } catch (error) {
      console.log('Error during LogIn', error);
      setMessage(error.response?.data?.message);
    }
  }

  return (
    <div className="wrapper">
      <div className="wrapper flex flex-col gap-10 items-center h-[85dvh] justify-center">
        <p className="font-bold text-3xl text-[#2c2c2c]">Welcome!</p>
        <form action="" onSubmit={submitForm} className="flex flex-col gap-6">
          <input
            type="text"
            className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
            placeholder="Username"
            value={user.username}
            onChange={getInput}
            name="username"
          />
          <input
            type="password"
            className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
            placeholder="Password"
            value={user.password}
            onChange={getInput}
            name="password"
          />
          <p className="text-red-900">{message}</p>
          <button
            type="Submit"
            className="bg-purple-700 hover:bg-purple-600 transition-all duration-300 cursor-pointer text-white font-medium w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          >
            Log In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to={"/sign-up"} className="italic underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIncomponent;
