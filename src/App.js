import React from "react";
import { ThemeProvider } from "styled-components";
import { AppTheme, GlobalStyle } from "./services/theme";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
