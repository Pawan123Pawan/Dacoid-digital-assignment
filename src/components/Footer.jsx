import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { BsAppIndicator } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiOutlineCamera } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = ({goHome, schedule}) => {
  const navigate = useNavigate()
  return (
    <div className="fixed bottom-0 flex w-full md:w-3/5 justify-between py-2 bg-white overflow-x-hidden">
      <div onClick={()=>navigate("/")} className="flex justify-center items-center text-2xl cursor-pointer text-[#7F7F7F]">
        <RiHome2Line />
      </div>
      <div onClick={()=>navigate("/schedule")} className="flex justify-center items-center text-2xl text-[#809AFF] cursor-pointer ">
        <BsAppIndicator />
      </div>
      <div
        className="p-4 flex justify-center items-center text-2xl cursor-pointer text-white rounded-full "
        style={{
          background:
            "linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%)",
        }}

      >
        <CiSearch />
      </div>
      <div className="flex justify-center items-center text-2xl cursor-pointer text-[#7F7F7F]">
        <HiOutlineCamera />
      </div>
      <div className="pe-6 flex justify-center items-center text-xl cursor-pointer text-[#7F7F7F]">
        <FaRegUser />
      </div>
    </div>
  );
};

export default Footer;
