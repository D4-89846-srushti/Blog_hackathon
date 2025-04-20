import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblogs from "./pages/Createblogs";
import EditBlog from "./pages/EditBlog";
import Home from "./componenets/Home";

import AddCategory from "./pages/AddCategory";
import DisplayCategory from "./pages/DisplayCategory";



function App() {
  return (
    <div className="container">
      {/* <h1 className="container page-header">Welcome home</h1> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createblogs" element={<Createblogs />} />
        <Route path="/editblogs" element={<EditBlog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<AddCategory />}/>
          
       
        <Route path="/categoryList" element={<DisplayCategory />} />



      </Routes>
 

    </div>
  );
}

export default App;
