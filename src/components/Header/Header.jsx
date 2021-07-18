import React from 'react'

export default function Header() {
    return (
        <>
            <div>
                <div className='pt-11 grid grid-cols-2'>
                    <div className='place-items-start'>
                        <div className='text-center flex justify-start pl-36'>
                            <p className='text-gray-500 font-bold text-6xl' >Rick & </p>
                        </div>
                        <div className='text-center flex justify-start pl-36'>
                            <p className='text-gray-500 font-bold text-6xl' >Morty API </p>
                        </div>
                         
                        <div className='flex justify-start text-left pl-40 pt-8 font-bold text-xl text-gray-900'>
                            <p>Find your favorite rick and morty</p>
                        </div>
                        <div className='flex justify-start text-left pl-40 font-bold text-xl text-gray-900 '>
                            <p>characters</p>
                        </div>
                        
                        
                        <div className="flex justify-start pl-36 pt-5" >
                            <input type="search" name="search" placeholder="Search..." className="bg-white h-10 px-9 pr-10 rounded-full border border-gray-800 font-semibold focus:outline-none w-96 placeholder-gray-800 placeholder-opacity-60"/>
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"></button>
                            <img src="img/lupa.png" alt="" className='h-5 pl-3 mt-2 pt-1 absolute' />
                        </div>
                        <img src="img/gun.png" alt="" className='h-2/6 ml-36 pl-5' />
        
                    </div>

                    <div className='pr-20'>
                        <img src="img/ram.png" alt="Morty" className='h-full w-full pb-10' />
                    </div>
                            
                    
                </div>
            </div>
            
        </>
    )
}
