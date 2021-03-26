import React from 'react';
import { Row, Col } from 'antd';

import FuelChart from '../../Components/Charts/FuelChart/FuelChart';
import SpeedChart from '../../Components/Charts/SpeedChart/SpeedChart';
import OrientationChart from '../../Components/Charts/OrientationChart/OrientationChart';

const Home = () => (
    <>
      <Row style={{height: "33%", padding: "30px"}}>
        <h1><b>Fuel Chart</b></h1>
        <Col span={24}>
          <FuelChart />
        </Col>
      </Row>
      <Row style={{height: "33%", padding: "30px"}}>
        <h1><b>Speed Chart</b></h1>
        <Col span={24}>
          <SpeedChart />
        </Col>
      </Row>
      <Row style={{height: "33%", padding: "30px"}}>
        <h1><b>Orienation</b></h1>
        <Col span={24}>
          <OrientationChart />
        </Col>
      </Row>
    </>
);

export default Home;
