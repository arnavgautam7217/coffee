import React, { useState } from 'react'


export default function Order() {
    const[count,setCount]=useState(1)
  return (
    <>
        <button id="b" className=' absolute justify-center mt-[-11px] ml-[88px] h-[10px] w-[40px] bg-yellow-950 text-white rounded-[3px] text-[6px]'
                 onClick={()=>{
                        document.getElementById("b").style.display="none";
                        document.getElementById("num").style.display="flex";
                }}>Order Now
        </button>
        <div id="num" className='hidden absolute mt-[-11px] ml-[88px] border border-black gap-1 bg-yellow-950 text-white rounded-[3px] text-[7px]'>
            <button  onClick={()=>{setCount(count+1)}}> +</button>
            <h1>{count}</h1>
            <button onClick={() => {const newCount = count - 1;

    if (newCount <= 0) {
      setCount(1);
      document.getElementById("b").style.display = "flex";
      document.getElementById("num").style.display = "none";
      return;
    }

    setCount(newCount);
  }}
>
  -
</button>

        </div>
    </>
  )
}
