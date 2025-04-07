
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Initial from './Vista/Initial'
import Login from './Vista/Login'
import Profile from './Vista/Profile'
import ResponsiveAppBar from './Components/ResponsiveAppBar'



function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Initial/>}/>
        <Route path="/user/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
