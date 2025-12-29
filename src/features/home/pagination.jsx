import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const totalPages = Math.ceil(products?.length / recordsPerPage);
  const fetchProducts = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/products?limit=200`);
      const productsData = await data?.json();
      console.log(productsData?.products);
      setProducts(productsData?.products);
      setFilterdProducts(productsData?.products?.slice(0, 10));
      setPageNumber(1);
    } catch (err) {
      console.log(err, "Error");
    }
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
    const startingIndex = (page - 1) * recordsPerPage;
    const lastIndex = startingIndex + recordsPerPage;
    const filteredProducts = products?.slice(startingIndex, lastIndex);
    setFilterdProducts(filteredProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(pageNumber, "page");
  console.log(filteredProducts, "filteredProducts ");
  console.log(totalPages, "totalPages ");

  return (
    <div>
      {filteredProducts?.length > 0 &&
        filteredProducts?.map((product) => (
          <h3 key={product?.id}>{product?.title}</h3>
        ))}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={pageNumber === page ? `active` : undefined}
          onClick={() => {
            handlePageClick(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
