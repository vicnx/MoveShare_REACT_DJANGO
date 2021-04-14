import {useContext, useEffect, useState,useCallback} from 'react'
import ProfileContext from "../context/ProfileContext";
import ProfileService from '../services/profiles.service'


export function useProfiles({username} = {username:null}){
  const [loading, setLoading] = useState(false)
  const {profile, setProfile} = useContext(ProfileContext)
  
  useEffect(function () {
    setLoading(true)
    ProfileService.get(username).then(({data}) =>{
      console.log("useProfileget");
      setProfile(data.profile)
      setLoading(false)
    })
  }, [username])

  const follow = useCallback((user) =>{
    ProfileService.follow(user).then(({data}) =>{
      setProfile(data.profile)
    })
  })

  const unfollow = useCallback((user) =>{
    ProfileService.unfollow(user).then(({data}) =>{
      setProfile(data.profile)
    })
  })

  return {
    loading : loading,
    profile:profile,
    follow,
    unfollow
  };
}