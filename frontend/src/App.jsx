import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";

import Header from "./components/header/header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Button variant="contained" color="primary">
        mui-btn
      </Button>
    </ThemeProvider>
  );
}

export default App;
