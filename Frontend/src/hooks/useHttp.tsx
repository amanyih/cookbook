import { useState } from "react";
import constants from "../constants";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

interface RequestInfo {
  url: string;
  body?: {};
  header?: {};
  method?: string;
  action?: AnyAction;
  dispatchError?: boolean;
}

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const sendRequest = async (requestInfo: RequestInfo) => {
    // console.log(requestInfo.method, requestInfo.url);
    setLoading(true);
    setError(false);

    let data;

    try {
      const response = await fetch(constants.API_URL + requestInfo.url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        method: requestInfo.method ? requestInfo.method : "GET",
        body: requestInfo.body ? JSON.stringify(requestInfo.body) : null,
      });

      if (response.ok) {
        data = await response.json();
        setData(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
    return data;
  };
  return {
    loading,
    error,
    sendRequest,
    data,
  };
};

export default useHttp;
