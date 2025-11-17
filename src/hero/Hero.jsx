import React from 'react'
export default function Hero() {
  return (
    <>
      <section className='relative top-[-50px] max-w-screen mx-auto h-[300px] bg-cover text-white bg-[url(https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg)] '>
        <p className='absolute mt-[120px] ml-20 text-[20px]'>Welcome!
            <br/>
            we serve the richest cofffee <br/>
            in the city!    
        </p>
        <button className='absolute bg-white h-5 w-[100px] text-black rounded-[15px] text-[12px] mt-[215px] ml-20 '>Order now</button>
        
      </section>
    </>
  )
}
