import Header from "../../Components/header/Header";
import React from "react";
import SideBar from "../../Components/sideBar/sideBar";
import Posts from "../../Components/posts/posts";

require("./Home.css");

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
       <Posts/>
        <SideBar />
      </div>
    </>
  );
};

export default Home;
