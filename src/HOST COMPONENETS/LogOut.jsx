import React from 'react'

function LogOut() {
  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    <div className="bg-white w-[320px] rounded-2xl p-6 shadow-xl">

      <h2 className="text-xl font-bold text-[#2e2e2e]">
        Log out?
      </h2>

      <p className="text-gray-500 mt-2">
        Are you sure you want to log out?
      </p>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setShowLogout(false)}
          className="px-4 py-2 rounded-xl border border-gray-300 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-purple-900 text-white cursor-pointer"
        >
          Log Out
        </button>

      </div>

    </div>

  </div></>
  )
}

export default LogOut
