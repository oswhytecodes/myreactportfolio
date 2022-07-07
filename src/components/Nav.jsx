import React from 'react'
import Logo from '../images/logo.png'
export const Nav = () => {
  return (
    <div>
     <nav className='flex items-center justify-between pt-16 pb-40 lg:px-36 md:px-12 w-full min-w-[10em]'>
      <img className='w-48' src={Logo} alt="logo" />
      <ul className='flex items-center justify-end uppercase gap-6 text-whiteFC'>
        <li className=''>About</li>
        <li className=''>Process</li>
        <li className=''>Projects</li>
        <li className=''>Contact</li>
      </ul>
     </nav>
      
    </div>
  )
}
