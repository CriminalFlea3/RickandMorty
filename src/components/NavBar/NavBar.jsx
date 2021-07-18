import React from 'react'
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
    return (
        <>
            <nav className='' id='home'>
                <div className='container flex items-center justify-between py-5 mx-auto text-gray-800 font-bold capitalize invisible sm:visible'>

                    <HashLink smooth to='/#home' className='hover:text-white font-bold text-center hover:bg-gray-700 hover:border rounded-3xl w-20 p-1'>Home</HashLink>

                    <HashLink smooth to='/#characters' className="hover:text-white font-bold text-center hover:bg-gray-700 hover:border rounded-3xl p-1">Characters</HashLink>

                    <img src="img/logo.png" alt="Rick and Morty" className='h-1/5 w-1/5' />
                
                    <a href='https://www.adultswim.com/videos/rick-and-morty' className="hover:text-white font-bold text-center  hover:bg-gray-700 hover:border rounded-3xl  p-1">Shows</a>

                    <a href='https://www.adultswim.com/games/virtual-rick-ality' className="hover:text-white font-bold text-center  hover:bg-gray-700 hover:border rounded-3xl p-1">Games</a>

                </div>
            </nav>  
        </>
    )
}
