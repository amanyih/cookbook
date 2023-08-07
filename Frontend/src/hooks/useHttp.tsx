import { useState } from "react";
import constants from "../constants";

interface RequestInfo {
  url: string;
  body?: Map<string, any>;
  header?: object;
  method?: string;
}

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const sendRequest = async (requestInfo: RequestInfo) => {
    setLoading(true);
    setError(false);

    let data;

    try {
      const response = await fetch(constants.API_URL + requestInfo.url, {
        headers: {
          "no-cors": "allow",
        },
        method: requestInfo.method ? requestInfo.method : "GET",
        body: JSON.stringify(requestInfo.body),
      });

      if (response.ok) {
        data = await response.json();
      } else {
        throw Error("Unable to find data");
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
    return data;
  };
  return {
    loading,
    error,
    sendRequest,
  };
};

export default useHttp;
