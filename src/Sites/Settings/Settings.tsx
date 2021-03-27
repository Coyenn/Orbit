import React from 'react';
import { Menu, Card, Slider, Typography, Form, Input, Button, Checkbox } from 'antd';
const Store = require('electron-store');

const SettingsStore = new Store();

const { Title } = Typography;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 21 },
};

const Settings = () => {

  const onFinish = (values: any) => {
    console.log("Saving Settings")
    SettingsStore.set("Settings", values)
    console.log("Saved Settings!")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <>
      <Card bordered={false} style={{ width: "100%" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            {...tailLayout}
            label="Graph Data Resolution"
            name="Graph Data Resolution"
            rules={[{ required: true, message: 'Please select a range!' }]}
          >
            <Slider />
          </Form.Item>

          <Form.Item>
            <center>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </center>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default Settings;
