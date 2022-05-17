import React, {useState,useEffect} from 'react';
import {Card, CardMedia, CardContent, Typography, CardActions, Icon, Button} from "@mui/material";


function Profile(props){

  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    let apiUrl = `https://api.github.com/users/${userInput}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error)
      });

  }, []);

  return (
    <div>
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={props.avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {props.login}
            </Typography>
            <hr />
            <Typography variant="body2" color="text.secondary">
              {props.name} is a {props.bio}
              <br/>
              <br/>
              <a><Icon name="user" />{props.location}</a>
              <a><Icon name="user" />Joined {props.created_at}</a>
            </Typography>
          </CardContent>
          <CardActions>
            <div>
            <span>
              <a><Icon name="user" />{props.repos} Repos</a>
              <a><Icon name="user" />{props.followers} Followers</a>
              <a><Icon name="user"/>{props.following} Following</a>
            </span>
            </div>
              
          </CardActions>
        </Card>
      </div>


    </div>
    
  );
}

export default Profile;