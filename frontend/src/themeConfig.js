import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

//Config theme settings
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[50],
    },
  },
});

export default theme;
