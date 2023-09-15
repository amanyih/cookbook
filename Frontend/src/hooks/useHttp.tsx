import { useState } from "react";
import constants from "../constants";
import { AnyAction } from "redux";

interface RequestInfo {
  url: string;
  body?: {};
  header?: {
    "Content-Type": string;
  };
  method?: string;
  action?: AnyAction;
  dispatchError?: boolean;
}

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const token = localStorage.getItem("token");

  const sendRequest = async (requestInfo: RequestInfo) => {
    setLoading(true);
    setError(false);

    let data;

    try {
      //if not multipart/form-data then stringify body
      const body =
        requestInfo.header &&
        requestInfo.header["Content-Type"] === "multipart/form-data"
          ? requestInfo.body
          : JSON.stringify(requestInfo.body);

      const response = await fetch(constants.API_URL + requestInfo.url, {
        headers: {
          "Content-Type": requestInfo.header
            ? requestInfo.header["Content-Type"]
            : "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        method: requestInfo.method ? requestInfo.method : "GET",
        body: requestInfo.body ? JSON.stringify(requestInfo.body) : undefined,
      });

      if (response.ok) {
        data = await response.json();
        setData(data);
        setError(false);
      } else {
        setLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
    return data;
  };

  const sendRequestWithFormData = async ({
    url,
    body,

    method,
  }: {
    url: string;
    body: FormData;
    method: string;
  }) => {
    setLoading(true);
    setError(false);

    let data;

    try {
      const response = await fetch(constants.API_URL + url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        method: method ? method : "GET",
        body: body,
      });
      console.log("response", response);

      if (response.ok) {
        data = await response.json();
        setData(data);
        setError(false);
      } else {
        setLoading(false);
        throw new Error("Something went wrong");
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
    data,
    sendRequestWithFormData,
  };
};

export default useHttp;
