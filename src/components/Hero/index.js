import React from "react";
import Server from "../../assets/image/server.svg";
const Hero = () => {
  return (
    <div className="container">
      <div className="d-flex mt-4 row align-items-center hero">
        <div className="col-5">
          <h2>
            Aplikasi tanpa server dengan integrasi berkelanjutan menggunakan AWS
          </h2>
          <p>
            Serverless dapat mengurangi beban operasional kita, dengan
            mendelegasikan beban operasional ke serverless services. Ini akan
            membuat kita lebih fokus kepada pengembangan aplikasi.
          </p>
        </div>
        <div className="col-7 box-img">
          <img src={Server}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
