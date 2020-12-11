import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function useAuthorization() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    !token && history.push("/");
  }, [history]);
}
