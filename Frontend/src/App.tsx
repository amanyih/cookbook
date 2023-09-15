import routes from "./router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./store/context";
import { AuthContext } from "./store/context";
import { useContext } from "react";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes({ auth: useContext(AuthContext).auth })} />
    </AuthProvider>
  );
}

export default App;
