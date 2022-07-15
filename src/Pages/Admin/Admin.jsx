import Connection from "../../components/connection/Connection";
import Finance from "../../components/finance/Finance";
import Header from "../../components/header/Header";
import ServicesActive from "../../components/services-active/ServicesActive";
import Services from "../../components/services/Services";
import SimpleSlider from "../../components/slider/Slider"
import Story from "../../components/story/Story";
import NavMenu from "../../components/nav/Nav";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className="admin__wrapper">
      <NavMenu />
      <div className="page__wrapper">
        <Header />
        <section className="page__main">
          <div className="page__main-container">
            <SimpleSlider />
            <Services />
            <Story />
          </div>
          <div className="page__main-container">
            <ServicesActive />
            <div className="page__main-conteiner-small">
              <Connection />
              <Finance />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admin;