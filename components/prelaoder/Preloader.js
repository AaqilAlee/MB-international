import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="data-loader">
        <div className="d-flex justify-content-center"> 
          <img
            src="/logo/logo3.png"
            alt=""
            className=""
            style={{ height: "70px" }}
          />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
