import React from "react";
import { Layout } from "antd";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import "./App.css";

import { Header, Sidebar } from "./Components";
import { AppLayout, ContentWrapper } from "./Layout";
import { Students, Config, Student } from "./Views";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Sidebar />
        <AppLayout>
          <Header />
          <ContentWrapper>
            <Switch>
              <Route exact path="/config" component={Config} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:deviceId" component={Student} />
              <Route path="/">
                <Redirect to="/students" />
              </Route>
            </Switch>
          </ContentWrapper>
        </AppLayout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
