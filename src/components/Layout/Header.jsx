import { MainMenu } from "./MainMenu.jsx";
import logoImg from "./assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav className="container grid nav-bar">
        <a className="nav-bar-logo" href="/">
          <img src={logoImg} alt="Little Lemon logo" />
        </a>

        <MainMenu />
      </nav>
    </header>
  );
};
