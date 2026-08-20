import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="wrapper">
        <p className="text-3xl font-bold text-[#343434]">Welcome!</p>

        <hr className="border-t border-gray-300 my-6" />
      </div>

      <div className="card-container wrapper flex flex-col gap-4">
        <div className="card-container bg-purple-200 py-4 px-4 rounded-lg shadow-lg">
          <div className="card flex justify-between">
            <p>Total Events Hosted</p>
            <p>0</p>
          </div>
        </div>

        <div className="card-container bg-purple-200 py-4 px-4 rounded-lg shadow-lg">
          <div className="card flex justify-between">
            <p>Approvals Pending</p>
            <p>0</p>
          </div>
        </div>
      </div>

      <div className="quick-actions wrapper flex flex-col my-6">
        <p className="font-medium text-2xl text-[#343434]">Quick Actions</p>
        <div className="btns flex justify-between items-start my-6">
          <button onClick={()=>{navigate('post-event')}} className="border-1 border-gray-300 py-2 px-3 w-[150px] rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all duration-300">
            Post an Event
          </button>
          <button onClick={()=>{navigate('pending-approvals')}} className="border-1 border-gray-300 py-2 px-3 w-[150px] rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all duration-300">
            Approved Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
