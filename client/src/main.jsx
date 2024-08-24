import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";
import Navbar from "./components/Navbar.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard.jsx";
import { NextUIProvider } from "@nextui-org/react";
// import PWR from "./components/PWR.jsx"

// Assuming WagmiProvider and config are imported correctly
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi.ts";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    
      <Route path="/landing" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <Navbar />
          <RouterProvider router={router} />
        </NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
