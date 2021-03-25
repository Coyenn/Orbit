import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => (
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu key="sub1" icon={<HomeOutlined />} title="Home">
            <Menu.Item key="1">Home</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Settings">
            <Menu.Item key="2">Settings</Menu.Item>
            <Menu.Item key="3">Bluetooth</Menu.Item>
        </SubMenu>
    </Menu>
);

export default Sidebar;