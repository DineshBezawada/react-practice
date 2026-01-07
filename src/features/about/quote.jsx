import { HocLoading } from "../../Hoc/lodaingHoc";

const Quote = (props) => {
  console.log(props, "props");
  return (
    <>
      <h3>Data</h3>
    </>
  );
};

export default HocLoading(Quote);
