import React from "react";
import PropTypes from "prop-types";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import SideBar from "components/sideBar/SideBar";
import "assets/styles/main.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Header />
      <div className="page-flex">
        <SideBar />
        <div className="page-container">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node,
  //   className: PropTypes.string,
};
export default PageTemplate;
