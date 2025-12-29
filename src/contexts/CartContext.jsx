import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addTocart = (item) => {
    setCartItems((prev) => {
      const existItem = prev?.find((itm) => itm.id === item.id);
      if (existItem) {
        return [...prev]?.map((cartItm) => {
          if (cartItm.id === item.id) {
            return { ...cartItm, quantity: cartItm?.quantity + 1 };
          }
        });
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  return (
    <>
      <cartContext.Provider value={{ cartItems, addTocart }}>
        {children}
      </cartContext.Provider>
    </>
  );
}
