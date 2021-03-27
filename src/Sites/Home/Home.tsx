import React from 'react';
import { Row, Col, Card, Statistic, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import FuelChart from '../../Components/Charts/FuelChart/FuelChart';
import SpeedChart from '../../Components/Charts/SpeedChart/SpeedChart';
import OrientationChart from '../../Components/Charts/OrientationChart/OrientationChart';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info:any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class Home extends React.Component {

  constructor(props:any) {
    super(props);

    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render(){
    return(
      <>
        <Row style={{height: "400px", padding: "30px"}}>
          <Col span={24}>
            <Card title="Rocket Information" style={{ width: "100%", height: "100%" }}>
              <Row>
                <Col span={8}>
                  <center>
                    <Statistic
                      title="Rocket Connection Status"
                      value={"Connected"}
                      valueStyle={{ color: '#3f8600' }}
                    />
                    <Button style={{ marginTop: 16 }} type="primary">
                      Disconnect
                    </Button>
                  </center>
                </Col>
                <Col span={8}>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag a statistic file on this area to upload it</p>
                  </Dragger>
                </Col>
                <Col span={8}>
                  <center>
                    <Statistic
                      title="Time"
                      value={this.state.time}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </center>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{height: "400px", padding: "30px"}}>
          <h1><b>Fuel Chart</b></h1>
          <Col span={24}>
            <FuelChart />
          </Col>
        </Row>
        <Row style={{height: "400px", padding: "30px"}}>
          <h1><b>Speed Chart</b></h1>
          <Col span={24}>
            <SpeedChart />
          </Col>
        </Row>
        <Row style={{height: "400px", padding: "30px"}}>
          <h1><b>Orienation</b></h1>
          <Col span={24}>
            <OrientationChart />
          </Col>
        </Row>
      </>
    )
  }
};

export default Home;
