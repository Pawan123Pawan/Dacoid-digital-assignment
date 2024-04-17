import img1 from "../assets/2.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen p-5 flex flex-col items-center justify-center gap-20 relative">
      <div
        onClick={() => navigate("/create-account")}
        className=" absolute top-6 right-6 text-lg underline cursor-pointer tracking-wider text-[#89A1FF]"
      >
        skip
      </div>
      <div className="w-[300px] h-[300px]">
        <img src={img1} alt="image1" className="w-full object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-semibold">Get Burn</h1>
        <p className="text-md opacity-80 mt-3">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>
      </div>
      <div
        onClick={() => navigate("/create-account")}
        className=" absolute right-6 bottom-10 "
      >
        <div className="myborder p-[2px] rounded-full">
          <div className="flex items-center justify-center button-color p-3 rounded-full">
            <IoIosArrowForward className="text-2xl text-white font-semibold cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
