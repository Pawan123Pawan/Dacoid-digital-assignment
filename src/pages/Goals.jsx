import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import google from "../assets/google.png";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const [fitnessGoals, setFitnessGoals] = useState({
    "weight-loss": false,
    "muscle-gain": false,
    "flexibility-and-mobility": false,
    "general-fitness": false,
    "event-specific-training": false,
    "mindfulness-and-mental-health": false,
  });

  const navigate = useNavigate();
  const handleCheckboxChange = (goal) => {
    setFitnessGoals((prevGoals) => ({
      ...prevGoals,
      [goal]: !prevGoals[goal],
    }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!fitnessGoals) {
        navigate("/goals");
      }
      const fitnessgoals = { ...fitnessGoals };

      await sessionStorage.setItem(
        "fitnessgoals",
        JSON.stringify(fitnessgoals)
      );
      navigate("/tracker");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-5 flex flex-col">
      <form onSubmit={handleSubmit} className="w-full mt-5">
        <h1 className="text-2xl font-semibold text-center">
          What are your goals?
        </h1>
        <div className="flex flex-col mt-8 gap-3">
          {Object.entries(fitnessGoals).map(([goal, checked]) => (
            <div
              key={goal}
              className="bg-[#F1F1F1] rounded-lg p-3 py-1 flex items-center justify-between"
            >
              <p className="text-sm capitalize">{goal.split("-").join(" ")}</p>{" "}
              <Checkbox
                checked={checked}
                onClick={() => handleCheckboxChange(goal)}
                sx={{
                  color: "#89A1FF",
                  "&.Mui-checked": {
                    color: "#89A1FF",
                  },
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            className=" mybutton cursor-pointer flex justify-center items-center text-xl text-white bg-[#89A1FF] rounded-xl hover:opacity-85 mb-6 mt-20"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Goals;
