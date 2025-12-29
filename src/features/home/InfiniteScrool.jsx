import { useEffect, useRef, useState } from "react";
import { data } from "react-router-dom";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const limit = 10;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const scrollRef = useRef(null);
  const initialFetchRef = useRef(false);

  const fetchProducts = async () => {
    if (loading) return;
    if (total && products.length >= total) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
      );
      const data = await res.json();
      setProducts((prev) => [...prev, ...data.products]);
      setTotal(data.total);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //   const handleScroll = () => {
  //     const container = scrollRef.current;
  //     if (!container || loading) return;

  //     const { scrollTop, clientHeight, scrollHeight } = container;

  //     if (scrollTop + clientHeight >= scrollHeight - 5) {
  //       fetchProducts();
  //     }
  //   };

  useEffect(() => {
    if (initialFetchRef.current) return;
    initialFetchRef.current = true;
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        fetchProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products, loading]);

  return (
    <div
      ref={scrollRef}
      //   onScroll={handleScroll}
      //   style={{
      //     height: "400px",
      //     overflowY: "auto",
      //     border: "1px solid #ccc",
      //   }}
    >
      {products.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}

      {loading && <div>Loading...</div>}
      {products.length === total && <p>No items to fetch</p>}
    </div>
  );
};

export default InfiniteScroll;
