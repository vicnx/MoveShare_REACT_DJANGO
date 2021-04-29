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
import "./profile.css";
import ExerciceList from "components/moveshare/exercices/exercice-list";
import Settings from "components/moveshare/profile/settings/settings";
import {useExercices} from 'hooks/useExercices'
import {useProfiles} from 'hooks/useProfile'
import useUser from 'hooks/useUser'
import UserContext from "context/UserContext";
import { useParams } from "react-router";
import Follow from 'components/moveshare/profile/follow/follow'
import {useWorkouts} from 'hooks/useWorkouts'
import WorkoutList from "components/moveshare/workouts/workouts-list";
import BackgroundSlider from 'react-background-slider'
import bg1 from 'common/images/backgrounds_app/bg_triangle4.jpg';
import bg2 from 'common/images/backgrounds_app/bg_triangle5.jpg';
import bg3 from 'common/images/backgrounds_app/bg_triangle6.jpg';

export default function Profile() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOwner, setisOwner] = useState(0);
  const {isLogged,logout,checkOwner} = useUser();
  const {username} = useParams();
  const {profile,follow,unfollow} = useProfiles({username});
  const params={
    filters: {
      limit: 4,
      author:username
    },
  }

  const {exercices,refreshExercices} = useExercices({params},username);
  const {workouts} = useWorkouts({params},username);



  const followUser = ()=>{
    follow(username)
  }
  const unfollowUser = ()=>{
    unfollow(username)
  }


  const tabChange = (tab) => {
    setCurrentTab(tab)
  }

  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return <ExerciceList exercices={exercices} type="profile" callBack={refreshExercices} />
        break;
      case 1:
        return <WorkoutList workouts={workouts} type="profile" callBack={refreshExercices} />
        break;
      case 2:
        return <Settings></Settings>
        break;
    }

  }



  return (
    <>
    <BackgroundSlider images={[bg1,bg2,bg3]} duration={20} transition={1} />
    <StylesProvider injectFirst>
      <Container className="profile">
        <Container className="profile_left">
          <div className="profile_card">
            <div className="profile_card_top">
              <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            </div>
            <div className="profile_card_bottom">
              <div className="profile_card_image">
                <img src={profile.image} alt=""/>
              </div>
              <div className="profile_card_text">
                <span className="profile_card_text--username">{profile.username}</span>
                <span className="profile_card_text--bio">{profile.bio}</span>
              </div>
              <div className="profile_card_buttons">
                <Follow username={username}/>
                
              </div>
              <div className="profile_card_footer">
                <div className="profile_card_footer--exercices">
                  <span className="profile_card_footer_count">{exercices.length}</span>
                  <span className="profile_card_footer_text">Exercices</span>
                </div>
                <div className="profile_card_footer--workouts">
                <span className="profile_card_footer_count">{workouts.length}</span>
                  <span className="profile_card_footer_text">Workouts</span>
                </div>
                <div className="profile_card_footer--followers">
                <span className="profile_card_footer_count">{profile.followersCount}</span>
                  <span className="profile_card_footer_text">Followers</span>
                </div>
              </div>

            </div>
          </div>
        </Container>
        <div className="profile_right">
          <div className="panel">
            <div className="tabs">
              <a href="#" className={currentTab==0 ? "tab_link active" : 'tab_link'} onClick={() => tabChange(0)}>Exercices</a>
              <a href="#" className={currentTab==1 ? "tab_link active" : 'tab_link'} onClick={() => tabChange(1)}>Workouts</a>
              {
                checkOwner(username)
                ?
                <a href="#" className={currentTab==2 ? "tab_link active" : 'tab_link'} onClick={() => tabChange(2)}>Settings</a>
                :
                ""
              }
              
            </div>
            { renderTab()}
          </div>
        </div>
      </Container>
    </StylesProvider>

      </>
  );
}
