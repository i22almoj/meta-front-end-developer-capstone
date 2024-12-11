import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { Home } from "./components/pages/Home/Home.jsx";
import { Reservations } from "./components/pages/Reservations/Reservations.jsx";
import { ReservationConfirmed } from "./components/pages/Reservations/ReservationConfirmed.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound.jsx";
import { Pending } from "./components/pages/Pending/Pending.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Pending title="About us" />} />
          <Route path="/menu" element={<Pending title="Menu" />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/reservations/confirmed"
            element={
              <>
                <ReservationConfirmed />
                Hola
              </>
            }
          />
          <Route
            path="/order-online"
            element={<Pending title="Order Online" />}
          />
          <Route path="/login" element={<Pending title="Login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
