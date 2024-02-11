import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Bootstrap CSS & JS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import About from "./components/About";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

// const author = "Saliaku";
// alert(author + " says hello, welcome!");
// let age= prompt("guess the author's age")
// let result= `the author is ${age} years old`
// alert(result)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);