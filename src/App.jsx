import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './PAGES/LandingPage'
import LogIn from './PAGES/LogIn'
import SignUp from './PAGES/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='log-in' element={<LogIn/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
