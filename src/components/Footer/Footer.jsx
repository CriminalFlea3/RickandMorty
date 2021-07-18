import React from 'react'

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
                    <button className='bg-white border rounded-full h-1/5 w-4/5  mt-10 pt-16 ml-10'>
                        <p className='text-gray-800 font-bold text-4xl -mt-14 '>Watch API docs</p>
                    </button>
                </div>
            </div>
            <footer className='bg-gray-800 mt-24 h-24 grid grid-cols-2'>
                <div>
                 <p className='text-gray-200 font-bold pt-8 pl-5 text-xl'>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className='flex justify-evenly pl-28 pt-9'>
                    <p className='text-gray-200 font-bold text-xl'>Home</p>
                    <p className='text-gray-200 font-bold text-xl'>Characters</p>
                    <p className='text-gray-200 font-bold text-xl'>Show</p>
                    <p className='text-gray-200 font-bold text-xl'>Games</p>
                </div>
            </footer>
        </>
    )
}
