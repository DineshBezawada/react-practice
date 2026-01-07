import React from "react";
import { useGetProductsQuery } from "./services/productsApi";

const App = () => {
  const { data, error, isLoading, isFetching } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h2>Products</h2>
      {isFetching && <p>Refreshing...</p>}

      {data.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default App;
