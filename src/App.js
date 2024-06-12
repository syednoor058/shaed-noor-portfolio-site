import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Home from "./screens/Home";
import Project1 from "./screens/Project1";


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
            <Route exact path="/project-1" element={<Project1 />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
