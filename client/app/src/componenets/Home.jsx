import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="page-header">Welcome to Blogs</h1>
        <div className="main">
          <div className="left-div">
            <Navbar></Navbar>
          </div>
          <div className="right-div">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
