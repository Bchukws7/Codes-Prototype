import React from "react";
import "./header.css";
import royal from "../../assets/royal.png";
import bus from "../../assets/bus.png";

const Header = () => {
  return (
    <div className="logistics__header section__padding" id="home">
      <div className="logistics__header-content">
        <h1>
          The fastest growing Car transport made quick, safe and affordable for
          your kids.
        </h1>

        <button type="button">Request Form</button>
      </div>
      
      <div className="logistics__header-image">
        <img src={bus} alt="bus" />
      </div>
      <div className="logistics__header-clips">
          <img src={royal} alt="royal" />
                  </div>
    </div>
  );
};

export default Header;
