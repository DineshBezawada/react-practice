import { useEffect, useState } from "react";

export const HocLoading = (Component) => {
  return function Modified(props) {
    const [isLoading, setIsLoading] = useState(true)
    console.log(props, "test Props");
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} data={[1, 2, 3, 4, 5]} />;
  };
};
