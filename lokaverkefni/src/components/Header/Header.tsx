import type { HeaderProps } from "../../types/HeaderTypes";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="logo">Litla Lemon</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
