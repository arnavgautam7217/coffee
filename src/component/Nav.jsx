import React from 'react'

export default function Nav() {
  const navData = ["HOME", "COFFEE", "BAKERY", "SHOP", "ABOUT", "LOGIN"]
  return (
    <>
    <div className='z-20 absolute top-[0px] h-[10%] flex gap-[200px] items-center w-[100%] text-white'>
      <div typeof='logo' className=' text-xl mt-2 ml-8'>COFFEE</div>
        <nav className='flex justify-center text-[10px] p-2'>
            <ul className='flex gap-2'>
            
            {navData?.map((el) => {
  return (
    <li key={el}>{el}</li>
  );
})}

            </ul>
      </nav>
      </div>
    </>
  )
}
