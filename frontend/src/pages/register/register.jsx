import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { StylesProvider } from "@material-ui/core/styles";
import Loading from 'react-simple-loading';


import "./register.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const { user,errors, isLogginLoading, hasLoginError, login,register, isLogged } = useUser();
  
  useEffect(() => {
    console.log(isLogged);
    if (isLogged) {
      history.push("/home");
      // window.location.reload();
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    register(email, password, username);
  };

  return (
    <StylesProvider injectFirst>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="login_div">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          {
            hasLoginError &&
            <div className="errors_login">
                {errors.email && <span>EMAIL: {errors.email}</span>}
                {errors.password && <span>PASSWORD: {errors.password}</span>}
                {errors.username && <span>USERNAME: {errors.username}</span>}
                {errors.error && <span>ERROR: {errors.error}</span>}
            </div>
          }

          {isLogginLoading && <Loading/>}
          {!isLogginLoading &&
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  REGISTER
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="#" variant="body2" to="/login">
                      {"Have account? Login!"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
          }
        </div>
        
          <Box mt={5}>
            <div className="separator">OR</div>
            <div className="SocialIcons">
              <Avatar className="facebookicon">
                <FacebookIcon />
              </Avatar>
              <Avatar className="googleicon">
                G
              </Avatar>
              <Avatar className="instagramicon">
                <InstagramIcon />
              </Avatar>
            </div>
          </Box>
      </Container>
    </StylesProvider>
  );
}
