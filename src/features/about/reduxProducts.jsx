import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";

const ReduxProducts = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state?.products);
  console.log(products, "redux test");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div>ReduxProducts</div>;
};

export default ReduxProducts;
