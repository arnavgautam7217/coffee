import React from 'react'

export default function Nav() {
  return (
    <>
    <div className='z-20 absolute top-[0px] h-[10%] flex gap-[200px] items-center w-[100%] text-white'>
      <div typeof='logo' className=' text-xl mt-2 ml-8'>COFFEE</div>
        <nav className='flex justify-center text-[10px] p-2'>
            <ul className='flex gap-2'>
            <li>HOME</li>
            <li>COFFEE</li>
            <li>BAKERY</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>LOGIN</li>
            </ul>
      </nav>
      </div>
    </>
  )
}
