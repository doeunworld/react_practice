import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "antd/dist/antd.min.css";

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
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="images/wavetop.jpeg" alt="배경" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link
                  style={{ color: "inherit" }}
                  className="product-link"
                  to={`/products/${product.id}`}
                >
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
