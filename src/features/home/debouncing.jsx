import { useEffect, useState } from "react";

export default function Debouncing() {
  const [query, setQuery] = useState("");
  let index = 0;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`calling...`);
      index = index +1;
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
}
