import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const { user,errors, isLogginLoading, hasLoginError, login, isLogged } = useUser();
    console.log(isLogged);

    useEffect(() => {
        console.log("USEEFFECT");
        console.log(isLogged);
        if (user) {
            history.push("/home")
            window.location.reload();
        }
    }, [isLogged]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        login(email, password);
    };



    return (
        <div className="loginPage">
            {isLogginLoading && <span>Checking</span>}
            {!isLogginLoading &&
                <form onSubmit={handleSubmit}>
                    <label>
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </label>
                    <label>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            variant="outlined" 
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                    </label>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Icon>send</Icon>}
                            type="submit"
                        >
                            Send
                        </Button>
                        {/* <button type="submit">Login</button> */}
                    </div>
                </form>
            }
            {
                hasLoginError &&
                <div className="errors_login">
                    {errors.email && <span>EMAIL: {errors.email}</span>}
                    {errors.password && <span>PASSWORD: {errors.password}</span>}
                    {errors.error && <span>ERROR: {errors.error}</span>}
                </div>
            }
        </div>

    );
}
