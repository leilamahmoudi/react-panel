import React from "react";
import PropTypes from "prop-types";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import SideBar from "components/sideBar/SideBar";

const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Header />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node,
  //   className: PropTypes.string,
};
export default PageTemplate;
