import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
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
