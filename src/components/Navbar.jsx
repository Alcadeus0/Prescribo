import React from "react";

const Navbar = () => {
    

    return (
        <nav className="flex justify-between p-8 bg-yellow-100">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Track your Prescriptions</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
        </nav>
    )
}

export default Navbar