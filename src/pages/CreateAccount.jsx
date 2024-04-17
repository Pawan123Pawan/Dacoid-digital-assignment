import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import google from "../assets/google.png";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [checked, setCheck] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (
        !user.firstname ||
        !user.lastname ||
        !user.email ||
        !user.password ||
        !checked
      ) {
        navigate("/create-account");
      }
      const userData = { ...user, checked };
      await sessionStorage.setItem("user", JSON.stringify(userData));
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-5 flex flex-col">
      <form onSubmit={handleSubmit} className="w-full mt-5">
        <h1 className="text-3xl font-semibold">Create an account</h1>
        <div className="flex flex-col mt-8 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="bg-[#F1F1F1] rounded-lg p-3 outline-none"
            required
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-[#F1F1F1] rounded-lg p-3 outline-none"
            required
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F1F1F1] rounded-lg p-3 outline-none"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#F1F1F1] rounded-lg p-3 outline-none"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <div className="flex items-center">
            <Checkbox
              checked={checked}
              onClick={() => setCheck((prev) => !prev)}
              sx={{
                color: "#89A1FF",
                "&.Mui-checked": {
                  color: "#89A1FF",
                },
              }}
            />
            <p className="text-xs">
              By proceeding, I agree to all{" "}
              <span className="text-[#89A1FF] cursor-pointer">T&C</span> and{" "}
              <span className="text-[#89A1FF] cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
          <button
            type="submit"
            className=" mybutton cursor-pointer flex justify-center items-center text-xl text-white bg-[#89A1FF] rounded-xl hover:opacity-85 mb-6 mt-20"
          >
            Create an account
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center items-center">
          <span className="border border-gray-400 w-full"></span>
          <span className="mx-3  text-xl ">or</span>{" "}
          <span className="border border-gray-400 w-full"></span>
        </div>
        <div className="flex gap-4 mx-auto">
          <div className="border border-[#7F7F7F] w-11 h-11 rounded-md flex justify-center items-center">
            <img src={google} alt="google" />
          </div>
          <div className="border border-[#7F7F7F] w-11 h-11 rounded-md flex justify-center items-center">
            <FaFacebookF className="text-2xl text-[#1A7AEB]" />
          </div>
        </div>
        <div className="mx-auto">
          <p>
            Already have an account?
            <span
              onClick={() => navigate("/signin")}
              className="text-[#89A1FF] cursor-pointer hover:underline"
            >
              Login
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
