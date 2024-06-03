import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Head from "../component/common/header/Head";
import Footer from "../component/common/footer/Footer";
import Header from "../component/common/header/Header";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar />  */}
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
