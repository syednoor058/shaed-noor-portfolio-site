import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Home from "./screens/Home";
import Project1 from "./screens/Project1";
import Project2 from "./screens/Project2";
import Project3 from "./screens/Project3";
import Project4 from "./screens/Project4";
import Project5 from "./screens/Project5";
import Project6 from "./screens/Project6";
import Project7 from "./screens/Project7";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      {loading ? (
        <div className=" w-full h-screen flex flex-col justify-center items-center gap-2">
          <BarLoader color={"#ff014f"} loading={loading} />
          <div>
            <h1 className="text-white text-base">Loading...</h1>
          </div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/hungry-shaed-web-application-details" element={<Project1 />} />
            <Route exact path="/movie-suggestion-system-details" element={<Project2 />} />
            <Route exact path="/car-price-prediction-system-details" element={<Project3 />} />
            <Route exact path="/bank-interest-calculator-details" element={<Project4 />} />
            <Route exact path="/personal-portfolio-site-details" element={<Project5 />} />
            <Route exact path="/wordpress-plugins-automation-details" element={<Project6 />} />
            <Route exact path="/house-price-prediction-details" element={<Project7 />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
