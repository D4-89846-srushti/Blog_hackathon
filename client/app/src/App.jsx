import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblogs from "./pages/Createblogs";
import EditBlog from "./pages/EditBlog";
import Home from "./componenets/Home";

function App() {
  return (
    <div className="container">
      <h1 className="container page-header">Welcome home</h1>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/home" element={user ? <Home></Home> : <Login></Login>}>
          <Route path="/createblogs" element={<Createblogs></Createblogs>}></Route>
          <Route path="/editblogs" element={<EditBlog></EditBlog>}></Route>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
