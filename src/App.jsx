import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./PAGES/LandingPage";
import LogIn from "./PAGES/LogIn";
import SignUp from "./PAGES/SignUp";
import HostDashboard from "./PAGES/HostDashboard";
import AttendeeDashboard from "./PAGES/AttendeeDashboard";
import PostEvent from "./HOST COMPONENETS/PostEvent";
import ApprovalPending from "./HOST COMPONENETS/ApprovalPending";
import ApprovedEvents from "./HOST COMPONENETS/ApprovedEvents";
import HostLanding from "./HOST COMPONENETS/HostLanding";
import Dashboard from "./HOST COMPONENETS/Dashboard";
import LogOut from "./HOST COMPONENETS/LogOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/host-dashboard" element={<HostLanding />}>
          <Route index element={<Dashboard />} />

          <Route path="post-event" element={<PostEvent />} />
          <Route path="pending-approvals" element={<ApprovalPending />} />
          <Route path="events-live" element={<ApprovedEvents />} />
        </Route>

        <Route path="/attendee-dashboard" element={<AttendeeDashboard />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
