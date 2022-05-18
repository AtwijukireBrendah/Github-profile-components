import {Link} from 'react-router-dom'
import React, {useState } from "react";
import {TextField, Button,} from "@mui/material";

function Main(props){

  const [userInput, setUserInput] = useState("");


  const clearUserData = (newValue) => {
    props.clearUserData(newValue)
  }
  
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setUserInput(searchValue)
    clearUserData(searchValue)
  };

  // const handleSubmit = () => {
  //   let apiUrl = `https://api.github.com/users/${userInput}`;
  //   fetch(apiUrl)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  // }


    return (
        <div>
            <div className="navbar">Find Github User Profile</div>
      <form  className="form" noValidate autoComplete="on">
        <span id="search">
          <TextField size="small" id="name" placeholder="Github User" variant="outlined" onChange={handleSearch} />
        </span>
        <Button 
          typecontent="Search"
          variant="contained"
          rel='formBtn'>
            <Link to={`/user-profile?username=${userInput}`} underline="none" >{"Search"}</Link>
        </Button>
      </form>
        </div>
    )
}

export default Main;



//first page