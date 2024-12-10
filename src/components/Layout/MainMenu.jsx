import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "./menuItems.js";

export const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <button
        className="nav-bar-hamburger"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </button>

      <ul
        className={isMenuOpen ? "nav-bar-links open" : "nav-bar-links"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={pathname == item.path ? "current-location" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
