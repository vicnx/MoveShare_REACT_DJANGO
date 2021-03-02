import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const { errors,isLogginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) history.push("/home");
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
            <p>Email</p>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div>
            <button type="submit">Login</button>
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
