import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";

import NotFound from "./pages/404";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./pages/Form";

const App = () => {
  return (
    <>
      <Routes>                          
         <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Route>
          <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(App);