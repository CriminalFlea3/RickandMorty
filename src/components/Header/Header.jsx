import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

export default function Header({onSearch}) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const search = e => {
        e.preventDefault();
        onSearch(input);
    }
    
    return (

        <>
            <div className='w-auto h-auto'>
                <div className='pt-11 grid grid-cols-1 sm:grid-cols-2'>
                    <div>
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
                        
                        
                        <div className="flex pl-36 pt-5" >

                            <form onSubmit={ search }>
                                <input onChange={handleChange} value={input} type="search" name="search" placeholder="Enter and click the weapon..." className="bg-white h-10 px-9 pr-10 rounded-full border border-gray-800 font-semibold focus:outline-none w-96 placeholder-gray-800 placeholder-opacity-60"/>
                                <button className='-ml-10' type='submit'><img src="img/lupa.png" alt="" className='h-5 pt-1' /></button>
                            </form>
                            
                        </div>
                        <HashLink to='/#characters' smooth>
                            <img src="img/gun.png" alt="" className='h-2/6 ml-36 pl-5'/>
                        </HashLink>
        
                    </div>

                    <div className='pr-20'>
                        <img src="img/ram.png" alt="Morty" className='h-full w-full pb-10' />
                    </div>
                            
                    
                </div>
            </div>
            
        </>
    )
}
