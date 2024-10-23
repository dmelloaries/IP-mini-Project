import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./App.js";
import Contact from "./pages/Contact";
import Body from "./components/Body.jsx";
import Error from "./pages/Error";
import Search from "./pages/Search.jsx";
import Shimmer from "./pages/Shimmer.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";
import Signup from "./auth/Signup.jsx";
import Login from "./auth/Login.jsx";
import Profile from "./pages/ProfilePage.jsx";

const About = lazy(() => import("./pages/About"));

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <Signup/>,
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error></Error>,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Body />,
        errorElement: <Error></Error>,
      },
      {
        path: "/About", //Bundling is done here
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <Error></Error>,
      },
      {
        path: "/profile",
        element: <Profile/>,
        errorElement: <Error></Error>,
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
        errorElement: <Error></Error>,
      },
      {
        path: "/Search",
        element: <Search />,
        errorElement: <Error></Error>,
      },
     
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error></Error>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();

