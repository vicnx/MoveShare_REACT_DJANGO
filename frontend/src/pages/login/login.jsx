import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";

// import {useLocation} from "wouter" //alternativa a router-dom

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const {login,isLogged} = useUser()

  useEffect(()=>{
    if(isLogged) history.push('/home')
  },[isLogged])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    login(email, password)
  };

  return (
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
  );
}
