import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="bg_color">
      <span>Hi there!!!</span>
      <button onClick={() => console.log("Button pressed")}>Press ME</button>
    </div>
  );
};

export default Home;
