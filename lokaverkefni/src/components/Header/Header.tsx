import { useState } from "react";
import type { HeaderProps } from "../../types/HeaderTypes";
import "./Header.css";
import { Link } from "react-router-dom";

import logoDark from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo-light.png";

function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={darkMode ? logoLight : logoDark}
          alt="Litla Lemon"
          className="logo-img"
        />
        <h1 className="logo">Litla Lemon</h1>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>
          Menu
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
