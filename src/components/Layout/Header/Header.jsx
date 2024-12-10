import logoImg from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <nav className="container grid nav-bar">
        <a className="nav-bar-logo" href="/">
          <img src={logoImg} alt="Little Lemon logo" />
        </a>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order online</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
