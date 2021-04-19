import React, {useContext,useState,useEffect} from "react";
import {
  Paper,
  Typography,
  Container,
  Button,
  Tabs,
  Tab
} from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import "./follow.css";
import {useExercices} from '../../../hooks/useExercices'
import {useProfiles} from '../../../hooks/useProfile'
import useUser from '../../../hooks/useUser'

export default function Follow({username}) {
  const {checkOwner} = useUser();
  const {profile,follow,unfollow} = useProfiles({username});
  console.log(profile);

  const followUser = ()=>{
    follow(username)
  }
  const unfollowUser = ()=>{
    unfollow(username)
  }

  return (
    <>
    <StylesProvider injectFirst>
    {
      !checkOwner(username) ?
        profile.following ? 
          <Button variant="contained" color="primary" className="followButton" onClick={unfollowUser}>
            UnFollow
          </Button>
        :
          <Button variant="contained" color="primary" className="followButton" onClick={followUser}>
            Follow
          </Button>
      :
      false
    }
    </StylesProvider>
    </>
  );
}
