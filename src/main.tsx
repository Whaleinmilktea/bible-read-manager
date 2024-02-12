import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CreateCycle from "./pages/create.tsx";
import Dashboard from "./pages/dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index : true, element: <Dashboard />},
      {path: "create", element: <CreateCycle/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <RouterProvider router={router} fallbackElement={<App />} />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
