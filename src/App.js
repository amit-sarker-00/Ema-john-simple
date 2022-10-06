import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Shop></Shop> },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
