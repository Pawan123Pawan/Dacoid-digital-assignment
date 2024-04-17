import { CiWarning } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import workout1 from "../assets/3.png";
import workout2 from "../assets/4.png";
import { Switch } from "antd";
import { useState } from "react";
import TrainContent from "../components/TrainContent";
import Footer from "../components/Footer";
import data from '../assets/data.png'

const Tracker = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full p-3 flex flex-col">
      <div className="w-full mt-5">
        <h1 className="text-2xl font-semibold text-center opacity-85 flex items-center gap-14">
          <span onClick={()=>navigate("/goals")} className="bg-gray-100 rounded-sm cursor-pointer">
            <IoIosArrowBack />
          </span>{" "}
          Workout Tracker
        </h1> 
        <div className="mb-10 mt-14 h-[220px] w-full">
            <img src={data} alt="data" className=" h-full w-full object-cotains" />
        </div>
        <div className="flex items-center warning rounded-xl p-3 gap-2 my-6">
          <span className="text-2xl text-[#7E96FF] font-bold">
            <CiWarning />
          </span>
          <span className="text-sm font-semibold opacity-80">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </span>
        </div>
        <div className="mt-16">
          <h1 className="text-lg font-semibold opacity-85 flex items-center justify-between">
            Upcoming Workout
            <span className="text-sm text-gray-500 cursor-pointer font-normal">
              See more
            </span>
          </h1>
          <div
            className="flex items-center justify-between  mt-3 px-3 py-2 rounded-xl"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="flex gap-2">
              <div className="w-14 h-14 bg-[#92a5ef85] rounded-full ">
                <img src={workout1} alt="workout1" className="" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-semibold opacity-85">
                  Full Body Workout
                </h1>
                <p className="text-xs text-gray-500">Today 3pm</p>
              </div>
            </div>
            <div>
              <Switch
                size="small"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className={checked ? "custom-switch checked" : "custom-switch"}
              />
            </div>
          </div>
          <div
            className="flex items-center justify-between  mt-3 px-3 py-2 rounded-xl"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="flex gap-2">
              <div className="w-14 h-14 bg-[#92a5ef85] rounded-full ">
                <img src={workout2} alt="workout2" className="" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-semibold opacity-85">
                  Upper Body Workout
                </h1>
                <p className="text-xs text-gray-500">4 Feb, 3:30 pm</p>
              </div>
            </div>
            <div>
              <Switch
                size="small"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className={checked ? "custom-switch checked" : "custom-switch"}
              />
            </div>
          </div>
        </div>

        <TrainContent />
      </div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default Tracker;
