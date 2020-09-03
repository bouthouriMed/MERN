import React from "react";
import { connect, useSelector } from "react-redux";
import loader from "../loader.gif";

function Loader() {
  const loading = useSelector((state) => state.loading);

  if(!loading) return null ;

  return (
    <div className="loader-container">
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
}

export default connect()(Loader);
