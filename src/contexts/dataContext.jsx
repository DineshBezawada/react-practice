import { createContext } from "react";
import { useFetch } from "../customHooks/useFetch";

export const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products?limit=200`
  );
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
