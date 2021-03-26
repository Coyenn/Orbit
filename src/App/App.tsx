import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Layout } from 'antd';

import Sidebar from '../Components/Sidebar/Sidebar'
import Topbar from '../Components/Topbar/Topbar'
import Home from '../Sites/Home/Home';
import Settings from '../Sites/Settings/Settings';
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen'

const { Header, Content, Sider } = Layout;

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <>
      {loading === false ? (
        <Router>
          <Layout style={{
            padding: 0,
            margin: 0,
            minHeight: "100vh",
          }}
        >
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
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/settings">
                    <Settings />
                  </Route>
                </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      ): (
        <LoadingScreen />
      )}
    </>
  );
}
