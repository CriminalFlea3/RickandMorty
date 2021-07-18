import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Footer() {
    return (
        <>
            <div className='grid grid-cols-2 pt-7'>
                <div className='pl-20'>
                    <div className='text-center flex justify-start'>
                        <p className='text-white font-bold text-6xl'>Look at the rick And</p>
                    </div>
                    <div className='text-center flex justify-start'>
                        <p className='text-white font-bold text-6xl'>Morty API</p>
                    </div>
                </div>
                <div className='pl-7 '>
                    <a href='https://rickandmortyapi.com/documentation' className='bg-white border rounded-full h-1/5 w-4/5  mt-10 pt-16 ml-10'>
                        <p className='text-gray-800 font-bold text-4xl -mt-14 '>Watch API docs</p>
                    </a>
                </div>
            </div>
            <footer className='bg-gray-800 mt-24 h-24 grid grid-cols-2'>
                <div>
                 <p className='text-gray-200 font-bold pt-8 pl-5 text-xl'>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className='flex justify-evenly pl-28 pt-9'>
                    <HashLink smooth to='/#home' className='text-gray-200 font-bold text-xl'>Home</HashLink>
                    <HashLink smooth to='/#characters' className='text-gray-200 font-bold text-xl'>Characters</HashLink>
                    <a href='https://www.adultswim.com/videos/rick-and-morty' className='text-gray-200 font-bold text-xl'>Show</a>
                    <a href='https://www.adultswim.com/games/virtual-rick-ality' className='text-gray-200 font-bold text-xl'>Games</a>
                </div>
            </footer>
        </>
    )
}
