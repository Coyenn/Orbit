import React from 'react';
import icon from '../../../assets/icon.png';

const Topbar = () => (
    <>
      <img src={icon} alt="Logo" style={{
        width: "100%",
        height: "50px",
        objectFit: "contain",
      }}
      />
    </>
);

export default Topbar;
