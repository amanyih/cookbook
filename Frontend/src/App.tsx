import routes from "./router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./store/context";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
