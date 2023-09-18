import routes from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./store/context";
import { useContext } from "react";
import { Fragment } from "react";
import { Notification } from "./components";
import { useSelector } from "react-redux";

function App() {
  const { show } = useSelector((state: any) => state.ui.notifcation);
  return (
    <Fragment>
      {show && <Notification />}
      <RouterProvider router={routes({ auth: useContext(AuthContext).auth })} />
    </Fragment>
  );
}

export default App;
