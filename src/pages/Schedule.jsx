import React from "react";
import Footer from "../components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const times = [
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
  "8 pm",
  "9 pm",
  "10 pm",
  "11 pm",
  "12 am",
];
const Schedule = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mt-5 p-3">
        <h1 className="text-2xl font-semibold text-center opacity-85 flex items-center gap-14">
          <span onClick={()=>navigate("/tracker")} className="bg-gray-100 rounded-sm cursor-pointer">
            <IoIosArrowBack />
          </span>{" "}
          Workout Tracker
        </h1>
        <div className="w-full">
          <p className="flex items-center justify-center my-3">
            <span>
              <IoIosArrowBack />
            </span>
            Feb 2024{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            <div className="p-2 px-4 opacity-85 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
              <p>Sun</p>
              <p className="text-4xl">5</p>
            </div>
            <div
              className="p-2 px-4 opacity-85 bg-white shadow-md rounded-lg flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%)",
                color: "white",
              }}
            >
              <p>Mon</p>
              <p className="text-4xl">6</p>
            </div>
            <div className="p-2 px-4 opacity-85 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
              <p>Tue</p>
              <p className="text-4xl">7</p>
            </div>
            <div className="p-2 px-4 opacity-85 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
              <p>Wed</p>
              <p className="text-4xl">8</p>
            </div>
            <div className="p-2 px-4 opacity-85 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
              <p>Thu</p>
              <p className="text-4xl">9</p>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-slate-400 mt-10">
        {times.map((time, i) => {
          return (
            <div key={i} className="relative">
              <div className="px-3  py-2 font-semibold opacity-80 ">{time}</div>

              {time === "7 am" && (
                <div
                  className="px-2 p-1 z-40 text-md text-white flex justify-center items-center rounded-full absolute top-6 right-4"
                  style={{
                    background:
                      "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
                  }}
                >
                  Ab Workout, 7:30am
                </div>
              )}
              {time === "9 am" && (
                <>
                  <div
                    className="px-2 p-1 text-md text-white flex justify-center items-center rounded-full absolute top-3 right-14"
                    style={{
                      background:
                        "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
                    }}
                  >
                    Upperbody Workout, 9am
                  </div>
                  <div
                    className=" flex
                   items-center ms-3"
                  >
                    <div className="absolute z-40 bg-[#5883F7] h-2 w-2 rounded-full "></div>
                    <div className="border z-30 w-4/5 border-[#5883F7]"></div>
                  </div>
                </>
              )}

              {time === "2 pm" && (
                <>
                  <div className="px-2 p-1 z-40 text-md  flex justify-center items-center rounded-full absolute top-2 right-14 bg-gray-50">
                    Lowerbody Workout, 3pm
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
