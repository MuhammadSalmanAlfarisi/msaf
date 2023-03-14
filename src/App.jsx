import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="md:ml-24 lg:ml-24">
        <Home />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
