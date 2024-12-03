import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom' 
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
