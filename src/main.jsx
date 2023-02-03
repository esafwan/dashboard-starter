import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Elevation, Imagine } from "./pages";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/elevation",
    element: <Elevation />,
  },
  {
    path: "/imagine",
    element: <Imagine />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
