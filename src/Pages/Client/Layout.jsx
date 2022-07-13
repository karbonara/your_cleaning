import Footer from "../../components/client/footer/Footer";
import Header from "../../components/client/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout;