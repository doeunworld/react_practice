import "./index.css";
import axios from "axios";

function MainPage() {
  axios.get();
  return (
    <div>
      <div className="header">
        <img src="./images/wavetop.jpeg" alt="파도윗부분" />
      </div>
      <div className="mainContainer">
        <h2 className="title">도은 영화 추천</h2>

        <div className="mainWrapper">
          <div id="product-list">
            <div className="prouduct-card">
              <div>
                <img
                  className="product-img"
                  src="./images/products/keyboard1.jpg"
                ></img>
              </div>
              <div className="product-contents">
                <span className="product-name">키보드</span>
                <span className="product-price">10000원</span>
                <div className="product-seller">도은</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src="./images/wavebottom.jpeg" alt="파도아랫부분" />
      </div>
    </div>
  );
}
export default MainPage;
