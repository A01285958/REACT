
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Initial from './Vista/Initial';
import Login from './Vista/Login';
import Profile from './Vista/Profile';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import PiedePagina from './Components/PiedePagina';
import { useState } from 'react';



function App() {
  const [isLogin, setisLogin] = useState(false);
  const login = async (user) => {
    const data = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {"content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const datos = await data.json();
    setisLogin(datos.isLogin);
    return datos.isLogin;
  };
  const logOut = () => {
    setisLogin(false);
  };
  return (
    <BrowserRouter>

    {isLogin && <ResponsiveAppBar logOut={logOut}/>}
    <Routes>
        <Route path="/" element={<Login login={login} />}/>
        <Route path="/home" 
        element={isLogin ? <Initial/> : <Navigate to={"/"} />}/>
        <Route path="/user/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
    <PiedePagina></PiedePagina>
    </BrowserRouter>
      
  )
}
export default App
