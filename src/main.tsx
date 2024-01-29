import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import Create from "./routes/create.tsx";
import { config } from "./wagmi.ts";
import MyPets from "./routes/my-pets.tsx";
import List from "./routes/lists.tsx";

globalThis.Buffer = Buffer;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // TODO: add 404 page
    errorElement: <div>404</div>,
    children: [
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/my-pets",
        element: <MyPets />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
