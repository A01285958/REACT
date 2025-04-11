import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//import React, {useState} from "react"

const Login = ({login}) => {
  const navigate = useNavigate();  
  const [username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
    const isLogin = await login({username, password});
    if(isLogin){
      navigate("/home");
    } else {
      alert("Credenciales Incorrectas");
    }
  };
    return(
      <form onSubmit = {onsubmit}>
        <h1>Login</h1>
        <Box
         sx={{
          backgroundColor: "#e0f7fa", // light blue
        }}
          margin ={"auto"}
          flexDirection = {"column"}
          display = {"flex"}
          widht={200}
          marginTop={"20px"}
        >
          <TextField label={"Username"} 
          value={username}
           onChange={(e)=> setUsername(e.target.value)} />
          <TextField 
          type={"password"}
          label={"Password"} 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>
          <Button type={"sumbit"} variant = "contained">
            Login
          </Button>
        </Box>
      </form>
    )
}

export default Login