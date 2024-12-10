import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { Home } from "./components/pages/Home/Home.jsx";
import { Reservations } from "./components/pages/Reservations/Reservations.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound.jsx";
import { Pending } from "./components/pages/Pending/Pending.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Pending />} />
          <Route path="/menu" element={<Pending />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservations/confirmed" element={<Pending />} />
          <Route path="/order-online" element={<Pending />} />
          <Route path="/login" element={<Pending />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
