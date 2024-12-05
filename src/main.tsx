import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/collection",
                element: <Collection />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/order",
                element: <Orders />,
            },
            {
                path: "/place-order",
                element: <PlaceOrder />,
            },
            {
                path: "/product/:productId",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
