import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HOST_NAME } from "./constants/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme/theme";
import { template } from "./theme/template";
import { Grid } from "./components/Grid";
const client = new ApolloClient({
  uri: `${HOST_NAME}/graphql`,
  cache: new InMemoryCache(),
});
const GlobalStyle = createGlobalStyle`
  body {    
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
 
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <div className={"page"}> */}
          <Grid
            gridGap={[1, 1, 2]}
            // bg="yellow"
            height="100vh"
            gridTemplateColumns={[
              template.mobile.columns,
              template.tablet.columns,
              template.desktop.columns,
            ]}
            gridTemplateRows={[
              template.mobile.rows,
              template.tablet.rows,
              template.desktop.rows,
            ]}
            gridTemplateAreas={[
              template.mobile.area,
              template.tablet.area,
              template.desktop.area,
            ]}
          >
            <Header />
            <AppRouter />
            <Footer />
          </Grid>

          {/* </div> */}
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
