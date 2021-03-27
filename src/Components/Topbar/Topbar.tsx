import React from 'react';
import Banner from '../../../assets/Banner.png';

const Topbar = () => {
  return(
    <>
      <img src={Banner} alt="Logo" style={{
        width: "100%",
        height: "50px",
        objectFit: "contain",
      }}
      />
    </>
  )
};

export default Topbar;
