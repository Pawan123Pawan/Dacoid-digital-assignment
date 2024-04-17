import React from "react";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Goals from "./pages/Goals";
import Tracker from "./pages/Tracker";
import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <div className="w-full mx-auto md:w-3/5 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
