import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
