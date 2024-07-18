// import UseHook from "./UseHook/UseHook";
import React from "react";
import Navbar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
