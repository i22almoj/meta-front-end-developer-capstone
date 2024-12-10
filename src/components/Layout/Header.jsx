import { MainMenu } from "./MainMenu.jsx";
import logoImg from "./assets/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="container grid header-nav-bar">
        <a className="header-nav-bar-logo" href="/">
          <img src={logoImg} alt="Little Lemon logo" />
        </a>

        <MainMenu />
      </nav>
    </header>
  );
};
