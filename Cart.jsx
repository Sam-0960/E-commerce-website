import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>

      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>

          {item.name} - ${item.price}

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
}

export default Cart;
