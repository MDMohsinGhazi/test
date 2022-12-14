import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => SetError(err))
      .finally(setLoading(false));
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
