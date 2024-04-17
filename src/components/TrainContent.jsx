import React from "react";
import img from "../assets/5.png";
const TrainContent = () => {
  return (
    <div className="mt-5">
      <h1 className="text-[16px] font-semibold opacity-85 flex items-center justify-between">
        What Do You Want to Train
      </h1>
      <div className="bg-[#8cb0ffd2] rounded-xl p-3 flex justify-between my-4">
        <div className="text-sm opacity-95">
            <p>Full Body Workout</p>
            <p>Arms</p>
            <p>Chest</p>
        </div>
        <div className="w-24 h-24 rounded-full bg-[#ffffff9a]">
          <img src={img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TrainContent;
