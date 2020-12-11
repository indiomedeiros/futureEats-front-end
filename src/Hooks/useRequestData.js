import { useState, useEffect } from "react";
import { api } from "../Services/api";

export default function useRequestData(url, initState) {
  const [data, setData] = useState(initState);
  api.defaults.headers.common["auth"] = localStorage.getItem("token");

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return [data];
}
