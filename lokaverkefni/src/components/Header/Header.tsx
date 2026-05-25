import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>nafn vefsíðar</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
