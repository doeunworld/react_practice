import "./App.css";
import MainPage from "./main/index";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="로고" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <ProductPage></ProductPage>
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage></UploadPage>
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
