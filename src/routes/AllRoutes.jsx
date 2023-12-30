

import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../containers/DefaultLayout";
import Main from "../pages/Main"
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx"

function AllRoutes() {

  return (
    <DefaultLayout>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </DefaultLayout>
  ) 
}
export default AllRoutes;
