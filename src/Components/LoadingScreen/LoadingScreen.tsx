import React from 'react';
import icon from '../../../assets/icon.png'

const LoadingScreen = () => (
    <div style={{margin: "auto", width: "100vw", height: "100vh", justifyContent: "center", alignContent: "center"}}>
      <img src={icon} alt="Loading" style={{
        width: "100vw",
        height: "100px",
        objectFit: "contain",
        marginTop: "40vh",
      }}></img>
    </div>
);

export default LoadingScreen;
