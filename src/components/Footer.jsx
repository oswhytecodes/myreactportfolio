import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-greyFC text-whiteFC flex gap-4 flex-wrap md:justify-between justify-center px-20 py-12'>
        <h1 className='font-serif text-3xl'>Let's chat..</h1>
        <div className='text-[.6rem] uppercase leading-4'>
            <li>Send Emails To</li>
            <li>Hello@fosandco.com</li>
        </div>
        <div className='text-[.6rem] uppercase leading-4'>
            <li>Address: Floor</li>
            <li>Four</li>
            <li>Commercial Union</li>
            <li>House</li>
            <li>39 Pilgrim Street</li>
            <li>Newcastle ne16qe</li>
        </div>
        <div className='text-[.6rem] uppercase leading-4'>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Pinterest</li>
            <li>Twitter</li>
        </div>
    </footer>
  )
}
