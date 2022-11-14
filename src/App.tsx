import "./App.scss";
import ProductSelection from "./pages/ProductSelection/ProductSelection";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            defaultGradient: {
              from: "blue",
              to: "purple",
              deg: 60,
            },
            fontFamily: "Inter, sans-serif",
            fontFamilyMonospace: "Monaco, Courier, monospace",
            headings: { fontFamily: "Greycliff CF, sans-serif" },
            colorScheme,
          }}
        >
          <div className="wrapper">
            <Header />
            <ProductSelection />
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
