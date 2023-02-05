import React from "react";
import "./style.scss";

function Banner(props) {
  return (
    <div className="banner">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/img/customLogo.png"
          alt=""
          height="500px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-5 fw-bold mb-0">Làng Nghề truyền thống Vĩnh Quang</h5>
            {/* <p className="card-text fw-bold">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text ">Last updated 3 mins ago</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
