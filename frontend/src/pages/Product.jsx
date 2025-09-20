import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(shopContext);
  const [productData, setProductData] = useState(false);

  return <div>Product</div>;
};

export default Product;
