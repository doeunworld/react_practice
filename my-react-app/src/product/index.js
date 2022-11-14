import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(
    function () {
      axios
        .get(
          ` https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products+ ${id}`
        )
        .then(function (result) {
          setProduct(result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id]
  );

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imagUrl} alt="product이미지" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avater.png" alt="로고박스이미지" />
      </div>
    </div>
  );
}
export default ProductPage;
