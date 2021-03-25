import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Layout } from 'antd';

import Sidebar from '../Components/Sidebar/Sidebar'
import Topbar from '../Components/Topbar/Topbar'

const { Header, Content, Sider } = Layout;

export default function App() {
  return (
    <>
      <Layout style={{
        padding: 0,
        margin: 0,
        minHeight: "100vh",
      }}>
        <Header>
          <Topbar />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Sidebar/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100%",
            }}>
              <Router>
                <Switch>
                  <Route path="/"/> #component={}
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
