import { NavLink } from "react-router-dom";
import { playClickSound } from "../utils/clickSound";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={playClickSound}>
          Purandhar
        </NavLink>

        <ul className="navbar__list">
          <li>
            <NavLink
              to="/"
              onClick={playClickSound}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={playClickSound}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={playClickSound}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
