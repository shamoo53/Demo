import Navbar from "./components/Navbar";
import Layout from "./components/Pages/Layout";
import DashLayout from './components/DashLayout';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Signin from "./components/Pages/Signin";
import CreateAccount from "./components/Pages/CreateAccount";
import TokenInput from "./components/Pages/TokenInput";
import ForgottenPassword from "./components/Pages/ForgottenPassword";
import Dashboard from './components/Dashboard' 


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Signin />
      },
      {
        path: "/create-account",
        element: <CreateAccount />
      },
      {
        path: "/forgotten-password",
        element: <ForgottenPassword />
      },
      {
        path: "/tokeninput",
        element: <TokenInput />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
     
      }
      
    ]
  }
]);


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;