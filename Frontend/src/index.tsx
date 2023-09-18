import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import AuthProvider from "./store/context";
import store from "./store";
import { RequestProvider } from "./store/context/request";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AuthProvider>
      <RequestProvider>
        <App />
      </RequestProvider>
    </AuthProvider>
  </Provider>
);
