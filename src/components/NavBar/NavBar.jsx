import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav className=''>
                <div className='container flex items-center justify-between py-5 mx-auto text-gray-800 font-bold capitalize'>

                    <button className='text-white font-bold text-center sm:mx-6 bg-gray-700 border rounded-3xl w-20 h-9 p-1'>Home</button>

                    <p className="border-b-2 border-transparent hover:text-gray-800 sm:mx-6">Characters</p>

                    <img src="img/logo.png" alt="Rick and Morty" className='h-1/5 w-1/5' />
                
                    <p className="border-b-2 border-transparent hover:text-gray-800 sm:mx-6">Shows</p>

                    <p className="border-b-2 border-transparent hover:text-gray-800 sm:mx-6">Games</p>

                </div>
            </nav>  
        </>
    )
}
