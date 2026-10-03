import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCards = ({ product, isInCart }) => {
  const { setCartItems } = useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, {...product,quantity:1}]);
  };

  return (
    <div className="bg-black rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      <div className="mt-4">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
          {product.category}
        </span>

        <h2 className="text-lg font-bold mt-2 line-clamp-2">{product.title}</h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="text-sm">
            ⭐ {product.rating.rate}
            <span className="text-gray-500"> ({product.rating.count})</span>
          </div>
        </div>

        {/* button */}

        {isInCart ? (
          <button className="w-full bg-gray-600 flex items-center justify-center gap-5">
            <span className="text-4xl">-</span>
            <span  className="text-4xl">1</span> 
            <span  className="text-4xl">+</span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
