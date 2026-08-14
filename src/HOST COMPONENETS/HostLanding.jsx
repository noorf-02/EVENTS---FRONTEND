import React from "react";
import { Link, Outlet } from "react-router-dom";
import PostEvent from "./PostEvent";
import ApprovedEvents from "./ApprovedEvents";
import ApprovalPending from "./ApprovalPending";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HostLanding() {
  const [bar, setBar] = useState(false);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  function logoutFunction(){
    localStorage.removeItem('token');
    navigate('/')
    console.log('logged out');
  }
  return (
    <>
      {/* BAR */}
      <div className="top-bar w-full bg-gray-100 flex items-center md:hidden shadow-md">
        <div className=" wrapper flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[18px] font-bold">EVENTS</h1>
            <p className="text-[13px] italic">Organizer's Dashboard</p>
          </div>
          <i
            onClick={() => setBar(!bar)}
            className="fa-solid fa-bars text-[18px] cursor-pointer"
          ></i>
        </div>
      </div>
      {/* MOBILE */}
      <div className="md:hidden flex">
        <main>
          <Outlet />
        </main>

        {bar && (
          <aside className="h-dvh bg-gray-100 absolute right-0 w-[180px]">
            <div className="aside-content wrapper h-[85%]">
              <div className="aside-items wrapper flex flex-col h-[85%] justify-between">
                <div className="aside-pages flex flex-col gap-5">
                  <Link
                    to="."
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-[13px]">Dashboard</p>
                    <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[10px]"></i>
                  </Link>
                  <Link
                    to={"post-event"}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-[13px]">Post an event</p>
                    <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[10px]"></i>
                  </Link>
                  <Link
                    to={"events-live"}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-[13px]">Events Live</p>
                    <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[10px]"></i>
                  </Link>
                  <Link
                    to={"pending-approvals"}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-[13px]">Pending Approvals</p>
                    <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[10px]"></i>
                  </Link>
                </div>

                <button onClick={() => setLogout(!logout)} className="bg-purple-900 hover:bg-purple-800 transition-all duration-300 cursor-pointer text-white font-bold py-1 rounded-2xl">
                  Log Out
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
      {/* DESKTOP  */}
      <div className="sidebar-container h-dvh md:flex hidden text-[#2e2e2e]">
        <aside className="bg-gray-100 lg:w-[250px] md:w-[210px] flex flex-col border-r-2 border-gray-200 h-dvh">
          <div className="aside-items wrapper flex flex-col h-full justify-between">
            <div>
              <h1 className="text-2xl font-bold">EVENTS</h1>
              <p className="text-[15px] italic">Organizer's Dashboard</p>
            </div>

            <div className="aside-pages flex flex-col gap-5">
              <Link
                to="."
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="">Dashboard</p>
                <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[13px]"></i>
              </Link>
              <Link
                to={"post-event"}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="">Post an event</p>
                <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[13px]"></i>
              </Link>
              <Link
                to={"events-live"}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="">Events Live</p>
                <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[13px]"></i>
              </Link>
              <Link
                to={"pending-approvals"}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="">Pending Approvals</p>
                <i className="fa-solid fa-caret-right text-[#b8b8b8] text-[13px]"></i>
              </Link>
            </div>

            <button
              onClick={() => setLogout(!logout)}
              className="bg-purple-900 hover:bg-purple-800 transition-all duration-300 cursor-pointer text-white font-bold py-1 rounded-2xl"
            >
              Log Out
            </button>
          </div>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      {/* logOut  */}

      {logout &&
      (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[320px] rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-[#2e2e2e]">Log out?</h2>

            <p className="text-gray-500 mt-2">
              Are you sure you want to log out?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setLogout(false)}
                className="px-4 py-2 rounded-xl border border-gray-300 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={logoutFunction}
                className="px-4 py-2 rounded-xl bg-purple-900 text-white cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )
    }
    </>
  );
}

export default HostLanding;
