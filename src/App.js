import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { Children } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/dashboard", index: true, element: <Dashboard /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
