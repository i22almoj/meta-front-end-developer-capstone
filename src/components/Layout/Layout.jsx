import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
