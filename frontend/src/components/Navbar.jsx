import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="dark:bg-emerald-950 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-emerald-50">Blood Donation</span>
                </div>
                <Link to='/login' className="flex no-underline md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button 
                        type="button"
                        className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Log out
                    </button>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;