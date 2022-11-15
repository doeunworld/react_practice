import "./App.css";
import "antd/dist/antd.min.css";
import MainPage from "./main/index";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link>
            <img src="images/icons/logo.png" alt="로고" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
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
