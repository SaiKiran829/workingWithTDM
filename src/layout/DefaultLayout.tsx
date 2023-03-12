import React from "react";
import { Header, Content, Sidebar, Footer } from "../components/index";

const DefaultLayout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="right-container">
        <Header />
        <div className="views">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
