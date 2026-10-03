import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductCards from "./Components/ProductCards";
import { useContext, useState } from "react";
import { useEffect } from "react";
import CartScreen from "./Pages/CartScreen";
import { MyStore } from "./Context/MyContext";

const App = () => {
  let {isCartOpen,cartItems} = useContext(MyStore)

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductData(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };

    void fetchProductData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar/>

      {isCartOpen ? (
        <div className="">
          <CartScreen/>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {productData.map((elem) => {
            const isInCart = cartItems.some((val) => val.id === elem.id);

            return <ProductCards key={elem.id} product={elem} isInCart={isInCart} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
