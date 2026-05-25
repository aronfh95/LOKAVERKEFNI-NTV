import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
