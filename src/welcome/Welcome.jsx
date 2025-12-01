import React, { useState } from "react";

export default function Welcome({image,text, heading, price}) {
  // cosnt [image, ] = props
  console.log("dataChecking", image, text, heading, price)
  const [count, setCount] = useState(1);
  const [showCounter, setShowCounter] = useState(false);

  const handleMinus = () => {
    const newCount = count - 1;

    if (newCount <= 0) {
            setCount(1);
      setShowCounter(false);
      return;
    }
 
    setCount(newCount);
  };

  return (
    <div className="h-[200px] w-[130px] bg-gray-200 rounded-[10px] relative">
      <div
        className="h-[150px] w-[125px] rounded-[10px] mt-[2px] bg-bottom m-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h1 className="text-[11px] ml-[4px] ">{heading}</h1>
      <p className="text-[5px] text-center">{text}</p>
      <h2 className="text-[10px] ml-[4px]">{price}</h2>
 
      {/* Order Button */}
      {!showCounter && (
        <button
          className="absolute mt-[-11px] ml-[80px] h-[10px] w-[40px] bg-yellow-950 text-white rounded-[3px] text-[6px]"
          onClick={() => setShowCounter(true)}
        >
          Order Now
        </button>
      )}

      {/* Counter */}
      {showCounter && (
        <div className="absolute mt-[-11px] ml-[88px] border border-black gap-1 px-1 bg-yellow-950 text-white rounded-[3px] text-[7px] flex">
          <button onClick={() => setCount(count + 1)}> +</button>
          <h1>{count}</h1>
          <button onClick={handleMinus}> -</button>
        </div>
      )}
    </div>
  );
}