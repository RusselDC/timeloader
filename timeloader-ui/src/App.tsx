import './App.css'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyles } from '@mui/material'
import WelcomePage from './features/welcome'
import Login from './features/login'
function App() {


  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
  