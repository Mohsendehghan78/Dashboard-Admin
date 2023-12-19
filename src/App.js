import React from "react";
import './App.css'
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";




export default function App() {
  const Routers = useRoutes(Routes);

  return (

     <>
      <Navbar/>
      <div className="contain col-md-12">
        <Sidebar />
       <div className="routes col-md-10">{Routers}</div> 
      </div>
     


     </>
  );
}
