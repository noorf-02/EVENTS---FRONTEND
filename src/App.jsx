import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './PAGES/LandingPage'
import LogIn from './PAGES/LogIn'
import SignUp from './PAGES/SignUp'
import HostDashboard from './PAGES/HostDashboard'
import AttendeeDashboard from './PAGES/AttendeeDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/host-dashboard' element={<HostDashboard/>}/>
      <Route path='/attendee-dashboard' element={<AttendeeDashboard/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
