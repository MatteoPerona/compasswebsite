import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/compass-footerlogo.png";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
          <img src={logo} alt="" loading="lazy" style={{ width: '250px', height: '75px' }}/>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            COMPASS at UC San Diego
        
          </span>
          . All Rights Reserved.
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
      <div className="ptf-footer-socials has-black-color ">
          <SocialTwo/>
        </div>

      </div>
    </div>
  );
};

export default CopyRight;