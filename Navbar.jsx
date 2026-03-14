import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav>

      <Link to="/">
        Store
      </Link>

      <Link to="/cart">
        Cart ({cart.length})
      </Link>

    </nav>
  );
}

export default Navbar;
