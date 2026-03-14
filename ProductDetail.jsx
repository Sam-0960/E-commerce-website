import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {

  const { id } = useParams();

  const product = products.find(
    p => p.id === Number(id)
  );

  return (
    <div>

      <h1>{product.name}</h1>

      <p>Price: ${product.price}</p>

    </div>
  );
}

export default ProductDetail;
