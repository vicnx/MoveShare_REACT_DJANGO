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
import ExerciceList from "../../components/exercices/exercice-list";
import Settings from "../../components/profile/settings/settings";
import {useExercices} from '../../hooks/useExercices'
import {useProfiles} from '../../hooks/useProfile'
import useUser from '../../hooks/useUser'
import UserContext from "../../context/UserContext";
import { useParams } from "react-router";

export default function Profile() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOwner, setisOwner] = useState(0);
  const {isLogged,logout,checkOwner} = useUser();
  const {username} = useParams();
  const {profile} = useProfiles({username});


  const params={
    filters: {
      limit: 4,
      author:username
    },
  }

  const {exercices} = useExercices({params},username);
  useEffect(() => {
    // window.location.reload()
  }, [username]);




  const tabChange = (tab) => {
    setCurrentTab(tab)
  }

  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return <ExerciceList exercices={exercices} type="profile" />
        break;
      case 1:
        return "Workouts"
        break;
      case 2:
        return <Settings></Settings>
        break;
    }

  }



  return (
    <>
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
                <Button variant="contained" color="primary" className="followButton">
                  Follow
                </Button>
              </div>
              <div className="profile_card_footer">
                <div className="profile_card_footer--exercices">
                  <span className="profile_card_footer_count">18</span>
                  <span className="profile_card_footer_text">Exercices</span>
                </div>
                <div className="profile_card_footer--workouts">
                <span className="profile_card_footer_count">5</span>
                  <span className="profile_card_footer_text">Workouts</span>
                </div>
                <div className="profile_card_footer--followers">
                <span className="profile_card_footer_count">4563</span>
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
