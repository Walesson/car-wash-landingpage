import { createGlobalStyle } from "styled-components";
import { AppTheme } from "./appTheme";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
html {
  background-color: ${AppTheme.colors.light.main};
}
body {
  font-size: 62.5%;
  font-family: Roboto, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
`;
