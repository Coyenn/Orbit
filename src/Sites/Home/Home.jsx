import React from 'react';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';
import FuelChart from '../../Components/Charts/FuelChart/FuelChart';
import { Row, Col, Menu } from 'antd';

const { SubMenu } = Menu;

const Home = () => (
    <>
      <Row style={{height: "33%"}}>
        <h1><b>Fuel Chart</b></h1>
        <Col span={24}>
          <FuelChart />
        </Col>
      </Row>
      <Row style={{height: "33%"}}>
        <h1><b>Height</b></h1>
        <Col span={24}>

        </Col>
      </Row>
      <Row style={{height: "33%"}}>
        <h1><b>Speed</b></h1>
        <Col span={24}>

        </Col>
      </Row>
    </>
);

export default Home;
