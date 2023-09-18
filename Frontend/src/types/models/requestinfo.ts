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

export default RequestInfo;
