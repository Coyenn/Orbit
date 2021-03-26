import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Sidebar = () => (
  <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
  >
      <SubMenu key="sub1" icon={<HomeOutlined />} title="Home">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
      </SubMenu>

      <SubMenu key="sub2" icon={<SettingOutlined />} title="Settings">
          <Menu.Item key="2">
            <Link to="/settings">Settings</Link>
          </Menu.Item>
      </SubMenu>

  </Menu>
);

export default Sidebar;
