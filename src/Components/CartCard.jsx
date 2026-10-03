


import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const CartCard = ({ product }) => {
  const { setCartItems } = useContext(MyStore);

  const increaseQty = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = () => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="bg-black rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 flex gap-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain shrink-0"
      />

      <div className="flex-1 min-w-0">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
          {product.category}
        </span>

        <h2 className="text-base font-bold mt-2 line-clamp-2 text-white">
          {product.title}
        </h2>

        <div className="flex justify-between items-center mt-3">
          <h3 className="text-xl font-bold text-green-600">
            ${(product.price * product.quantity).toFixed(2)}
          </h3>

          <button
            onClick={removeFromCart}
            className="text-red-500 text-sm hover:text-red-400"
          >
            Remove
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={decreaseQty}
            className="w-7 h-7 flex items-center justify-center bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            −
          </button>

          <span className="text-white text-sm w-6 text-center">
            {product.quantity}
          </span>

          <button
            onClick={increaseQty}
            className="w-7 h-7 flex items-center justify-center bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
