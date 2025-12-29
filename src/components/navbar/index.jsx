import { useContext } from "react";
import "./navbar.css";
import { themeContext } from "../../contexts/themeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme } = useContext(themeContext);
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li></li>
        </ul>
        <button onClick={toggleTheme}>Theme</button>
      </nav>
    </div>
  );
};

export default Navbar;
