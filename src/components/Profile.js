import React, {useState,useEffect} from 'react';
import {Card, CardMedia, CardContent, Typography, CardActions, Icon} from "@mui/material";
import Main from './Main';
import { useSearchParams } from 'react-router-dom';


function Profile(){

  const [userNameFromUrl, setUsernameFromUrl] = useSearchParams();

  const [userInput, setUserInput] = useState("");
  const [githubUserData, setGithubUserData] = useState(null);

  const clearUserData = (newValue) => {
    getGitHubUserData(newValue)
  }

  const getGitHubUserData = (username) => {
    if (!username){
      // Dont do anything if username is empty
      return
    }
    let apiUrl = `https://api.github.com/users/${username}`;
    fetch(apiUrl)
        .then((response) => {
          return response.json()
        })
        .then((githubResults) => {
          setGithubUserData(githubResults)
        })
        .catch((error) => {
          console.log(error)
        });
  }

  useEffect(() => {

    if(userNameFromUrl !== null && userInput == "" && githubUserData == null){
      let username = userNameFromUrl.get("username")
      setUserInput(username)
      getGitHubUserData(username)
    }

  }, [userInput, githubUserData]);

  return (
    <div>
      <Main clearUserData={(newValue) => { clearUserData(newValue) }} />
      {
        !githubUserData ? null : (
          <div className="card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={githubUserData.avatar_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {githubUserData.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {githubUserData.login}
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary">
                  {githubUserData.name} is a {githubUserData.bio}
                  <br/>
                  <br/>
                  <a href='https://github.com/'><Icon name="user" />{githubUserData.location}</a>
                  <a href='https://github.com/'><Icon name="user" />Joined {githubUserData.created_at}</a>
                </Typography>
              </CardContent>
              <CardActions>
                <div>
                <span>
                  <a href='#https://github.com/'><Icon name="user" />{githubUserData.repos} Repos</a>
                  <a href='https://github.com/'><Icon name="user" />{githubUserData.followers} Followers</a>
                  <a href='https://github.com/'><Icon name="user"/>{githubUserData.following} Following</a>
                </span>
                </div>
                  
              </CardActions>
            </Card>
          </div>
        )
      }
    </div>
    
  );
}

export default Profile;