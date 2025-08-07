import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import User from "./pages/User";
import NotFound from "./pages/404";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>                          
         <Route path="/" element={<Layout/>}>
          <Route index={true} element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
          <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(App);