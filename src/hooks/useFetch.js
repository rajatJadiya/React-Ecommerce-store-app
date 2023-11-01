import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, params)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url, params)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, error, loading, refetch };
};

export default useFetch;
