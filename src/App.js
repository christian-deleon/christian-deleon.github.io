import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/index";
import Footer from "./components/footer/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
