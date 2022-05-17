import {Link} from 'react-router-dom'
import React, {useState } from "react";
import {TextField, Button,} from "@mui/material";

function Main(props){

  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
    console.log(setUserInput);
  };

  const handleSubmit = () => {
    let apiUrl = `https://api.github.com/users/${userInput}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data);
      })
  }


    return (
        <div>
            <div className="navbar">Find Github User Profile</div>
      <form  className="form" noValidate autoComplete="on">
        <span id="search">
          <TextField size="small" id="name" placeholder="Github User" variant="outlined" onChange={handleSearch} />
        </span>
        <Button typecontent="Search"
          variant="contained" onClick={handleSubmit}  color="primary" ><Link to="/user-profile" underline="none" >{"Search"}</Link></Button>
          </form>
        </div>
    )
}

export default Main;



//first page