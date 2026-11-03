import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Profile } from './pages/Profile.jsx'
import { Login } from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>} path='/'></Route>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Profile/>} path="/profile"></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
