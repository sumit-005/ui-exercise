import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultGradient: {
          from: "blue",
          to: "purple",
          deg: 60,
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
