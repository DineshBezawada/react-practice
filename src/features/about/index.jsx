import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../contexts/dataContext";

const About = () => {
  const [showBox, setShowBox] = useState(false);
  const divRef = useRef(null);

  const {data,loading, error } = useContext(DataContext);
  console.log(data,loading,error,"context");

  useEffect(() => {
    window.addEventListener("mousedown", () => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowBox(false);
      }
    });
    return () => {
      window.removeEventListener("mousedown", () => {
        if (divRef.current && !divRef.current.contains(event.targrt)) {
          setShowBox(false);
        }
      });
    };
  }, [showBox]);
  return (
    <>
      <button onClick={() => setShowBox(true)}>show Div</button>
      {showBox && (
        <div
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "lightblue",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={divRef}
        ></div>
      )}
    </>
  );
};

export default About;
