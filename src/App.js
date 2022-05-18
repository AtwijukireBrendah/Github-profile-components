import React, {useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Profile from "./components/Profile";
import "./App.css";


function App() {
  
  const [name, setName] = useState("");
  const [login, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const[location,setLocation]=useState("");
  const[created_at,setDateJoined]=useState("");

 
  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio,
    location,
    created_at,
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
    setLocation(location);
    setDateJoined(created_at);
};

  return (
    <BrowserRouter>
    { 
    <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/user-profile" element={<Profile/>}/>
    </Routes> 
    }
   </BrowserRouter>

  );

}

export default App;

