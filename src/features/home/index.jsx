import { useContext } from "react";
import { cartContext } from "../../contexts/CartContext";
import Reducer from "./Reducer";
import Pagination from "./pagination";
import InfiniteScrool from "./InfiniteScrool";
import Debouncing from "./debouncing";

const Home = () => {
  const { cartItems, addTocart } = useContext(cartContext);
  console.log(cartItems, "cartItems");

  const item1 = {
    id: 1,
    name: "Item1",
  };
  const item2 = {
    id: 2,
    name: "Item2",
  };
  const item3 = {
    id: 3,
    name: "Item3",
  };

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          addTocart(item1);
        }}
      >
        addTocart
      </button>
      <Reducer />
      <Debouncing/>
      {/* <Pagination /> */}
      <InfiniteScrool />
    </>
  );
};

export default Home;
