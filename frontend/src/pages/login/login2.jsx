import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "./login.css";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const { errors, isLogginLoading, hasLoginError, login, isLogged } = useUser();

    useEffect(() => {
        if (isLogged) {
            history.push("/home")
            window.location.reload();
        }
    }, [isLogged]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        login(email, password);
    };
    const classes = useStyles();

    return (
        <Grid container component="main" className="grid_root">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="login_image" />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className="login_div">
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {
                        hasLoginError &&
                        <div className="errors_login">
                            {errors.email && <span>EMAIL: {errors.email}</span>}
                            {errors.password && <span>PASSWORD: {errors.password}</span>}
                            {errors.error && <span>ERROR: {errors.error}</span>}
                        </div>
                    }
                    {isLogginLoading && <span>Checking</span>}
                    {!isLogginLoading &&
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    }
                </div>
            </Grid>
        </Grid>
    );
}