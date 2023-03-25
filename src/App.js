import Candidates from "./components/candidate/Candidates";
import Dashbord from "./components/dashbord/Dashbord";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

import Transactions from "./components/transaction/Transactions";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/dashbord", element: <Dashbord /> },
      { path: "/candidate", element: <Candidates /> },

      { path: "/transactions", element: <Transactions /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="h-full">
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
