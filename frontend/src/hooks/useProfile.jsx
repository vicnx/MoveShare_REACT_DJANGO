import {useContext, useEffect, useState} from 'react'
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
  }, [])


  return {
    loading : loading,
    profile:profile
  };
}