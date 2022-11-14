import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
        console.log(result);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="로고" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/wavetop.jpeg" alt="배경" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products &&
            products.map(function (product, index) {
              return (
                <div className="product-card">
                  <div>
                    <img
                      className="product-img"
                      src={product.imageUrl}
                      alt="상품이미지"
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt="상품이미지"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;
