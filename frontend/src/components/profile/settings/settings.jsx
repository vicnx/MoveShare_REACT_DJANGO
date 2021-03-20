import React, { useState, useEffect,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useUser from '../../../hooks/useUser';
import UserContext from "../../../context/UserContext";






//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./settings.css";
import {Typography} from "@material-ui/core";

const Settings = () => {
  const {isLogged,logout,checkOwner,updateUser} = useUser();
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [image, setImage] = useState(user.image);




  const handleSubmit = (e) => {
    updateUser(image,bio)
    e.preventDefault();
  };

  return (
    <div className="settings_div">
      <form className="settings_form" noValidate onSubmit={handleSubmit}>
      <TextField
          variant="outlined"
          margin="normal"
          disabled
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          disabled
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
          fullWidth
          id="image"
          label="image"
          name="image"
          autoComplete="image"
          autoFocus
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          id="bio"
          label="Bio"
          name="bio"
          autoComplete="bio"
          rows={4}
          autoFocus
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit_btn"
        >
          UPDATE
        </Button>
      </form>
    </div>

  );
};

export default Settings;
