import React from 'react'
import Nav from './components/nav'

export default function Brands() {
  return (
    <div className='w-full flex items-center justify-center flex-col bg-black  text-white h-screen'>
        <Nav/>
        <div>
            <h1 className='text-5xl text-center'>Brands</h1>
        </div>
    </div>
  )
}
