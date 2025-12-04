import { useEffect, useState } from "react";

function useFetchGetReq() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          headers: {
            "User-Agent": "personnel",
          },
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP error: Status ${res.status}`);
        }
        let data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setData(null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, loading };
}

export default useFetchGetReq;
