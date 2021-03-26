import React from 'react';
import Loading from '../../../assets/Loading.gif'

const LoadingScreen = () => (
    <div style={{margin: "auto", width: "100vw", height: "100vh", justifyContent: "center", alignContent: "center"}}>
      <img src={Loading} alt="Loading" style={{
        width: "100vw",
        height: "200px",
        objectFit: "contain",
        marginTop: "40vh",
      }}></img>
    </div>
);

export default LoadingScreen;
