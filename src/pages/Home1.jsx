import React from "react";
import img1 from "../assets/1.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Home1 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen p-5 flex flex-col items-center justify-center gap-20 relative">
      <div
        onClick={() => navigate("/home2")}
        className=" absolute top-6 right-6 text-lg underline cursor-pointer tracking-wider text-[#89A1FF]"
      >
        skip
      </div>
      <div className="w-[285px] h-[285px]">
        <img src={img1} alt="image1" className="w-full object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-semibold">Track Your Goal</h1>
        <p className="text-md opacity-80 mt-3">
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      <div
        onClick={() => navigate("/home2")}
        className=" absolute right-6 bottom-10  "
      >
        <div className=" border-2 border-e-2 p-[2px] rounded-full border-e-[#89a1ff] w-full border-white">
          <div className="flex items-center justify-center button-color p-3 rounded-full">
            <IoIosArrowForward className="text-2xl text-white font-semibold cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
