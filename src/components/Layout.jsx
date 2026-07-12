import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorPet from "./CursorPet";

function Layout() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CursorPet />
    </div>
  );
}

export default Layout;
