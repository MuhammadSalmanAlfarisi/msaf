import React, { useState } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

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
        <Work />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
