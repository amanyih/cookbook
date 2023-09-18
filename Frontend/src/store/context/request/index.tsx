import { createContext } from "react";
import useHttp from "../../../hooks/useHttp";
import RequestInfo from "../../../types/models/requestinfo";

const RequestContext = createContext({
  sendRequest: (requestInfo: RequestInfo) => {},
});

const RequestProvider = ({ children }: { children: React.ReactNode }) => {
  const { sendRequest } = useHttp();

  return (
    <RequestContext.Provider
      value={{
        sendRequest: sendRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestProvider };
