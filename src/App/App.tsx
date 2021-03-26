import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Layout } from 'antd';

import Sidebar from '../Components/Sidebar/Sidebar'
import Topbar from '../Components/Topbar/Topbar'
import Home from '../Sites/Home/Home';
import Settings from '../Sites/Settings/Settings';

const { Header, Content, Sider } = Layout;

export default function App() {
  return (
    <>
      <Router>
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
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/settings" component={Settings} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}
