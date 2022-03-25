import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
