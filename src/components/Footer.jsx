import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='fixed mx-auto flex px-4 py-2 bottom-7 inset-x-0 gap-2 bg-transparent justify-center lg:w-1/2'>
                <div className='flex gap-5'>
                    {/* TODO: CHANGE THIS TO Link (react-router) */}
                    <NavLink
                        to='/about'
                        className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary cursor-pointer'} `}>About
                    </NavLink>
                    <NavLink
                        to='https://github.com/Mayuresh-22'
                        target='_blank'
                        className='hover:text-primary cursor-pointer'>Github
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Footer
