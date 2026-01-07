import { useEffect, useState } from "react";

export default function Debouncing() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`calling...`);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
}
