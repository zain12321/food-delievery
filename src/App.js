import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Section from "./components/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Foods from "./pages/Foods";
import Home from "./components/Home";
import Message from "./components/Message";
function App() {
  const [darkTheme, setDarkTheme] = useState();

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:min-h-screen dark:bg-slate-800">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="foods" element={<Foods />} />
        </Routes>
        <Message />
      </div>
    </div>
  );
}

export default App;
