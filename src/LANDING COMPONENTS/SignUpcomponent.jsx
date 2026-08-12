import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpcomponent() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const[message,setMessage] = useState('');

  function getInput(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/sign-up", user);
      console.log("Sign Up Form Submitted");
      setMessage(res.data.message)
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
      });
      navigate('/log-in');
    } catch (error) {
      console.log("Error during SignUp", error);
      setMessage(error.response?.data?.message);
    }
  }

  return (
    <div className="wrapper flex flex-col gap-10 items-center h-[85dvh] justify-center">
      <p className="font-bold text-3xl text-[#2c2c2c]">Create an Account</p>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          value={user.firstName}
          name="firstName"
          onChange={getInput}
          placeholder="First Name"
        />
        <input
          type="text"
          className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          value={user.lastName}
          name="lastName"
          onChange={getInput}
          placeholder="Last Name"
        />
        <input
          type="email"
          className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          value={user.email}
          name="email"
          onChange={getInput}
          placeholder="Email"
        />
        <input
          type="text"
          className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          value={user.username}
          name="username"
          onChange={getInput}
          placeholder="Username"
        />
        <input
          type="password"
          className="border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
          value={user.password}
          name="password"
          onChange={getInput}
          placeholder="Password"
        />
        <p className="text-red-900">{message}</p>
        <button
          type="Submit"
          className="bg-purple-700 hover:bg-purple-600 transition-all duration-300 cursor-pointer text-white font-medium w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl"
        >
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link to={"/log-in"} className="italic underline">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpcomponent;
