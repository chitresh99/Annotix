import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Navbar } from './Components/Navbar'
import { Outlet } from 'react-router-dom' 

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
