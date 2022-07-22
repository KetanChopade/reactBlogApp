import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row gx-0">
          <div  className="col-md-9 col-12">
            <Posts />
          </div>
          <div  className="col-md-3 col-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
