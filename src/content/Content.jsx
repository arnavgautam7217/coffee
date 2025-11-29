import React from 'react'
import Order from '../order/Order'
import Welcome from '../welcome/Welcome'

export default function Content() {

  const welcomeData = [
  {
    image: "https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg",
    heading: "Gulab Jammun",
    text: "ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj",
    price: "Rs.5199",
  },
  {
    image: "https://images.pexels.com/photos/6126245/pexels-photo-6126245.jpeg",
    heading: "Chocolate Tiramisu",
    text: "ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj",
    price: "Rs.250",
  },
  {
    image: "https://www.theflavorbender.com/wp-content/uploads/2023/04/Churros-2879.jpg",
    heading: "Churros",
    text: "ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj",
    price: "Rs.170",
  },
  {
    image: "https://www.sugarsaltmagic.com/wp-content/uploads/2020/01/Traditional-Lamingtons-4-768x1152.jpg",
    heading: "Australian Lamingtons",
    text: "ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj",
    price: "Rs.280",
  },
];

  return (
    <>
      <section className=' max-w-screen-xl mx-auto mt-0'>
        <div className='flex justify-center gap-5 '> 
            <div className='h-[60px] w-[60px] bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/004/101/598/large_2x/takeaway-coffee-cup-free-vector.jpg)]'> <p className='absolute mt-[55px] text-[10px] '>Hot Coffee</p></div>
            <div className='h-[60px] w-[60px] bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/025/782/733/non_2x/coffee-cup-icon-free-vector.jpg)]'> <p className='absolute mt-[50px] text-[10px] '>Hot Coffee</p> </div>
            <div className='h-[60px] w-[60px] bg-cover bg-[url(https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png)]'> <p className='absolute mt-[50px] text-[10px] '>Hot Coffee</p> </div>
            <div className='h-[60px] w-[60px] bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/019/022/662/non_2x/illustration-of-disposable-coffee-cup-vector.jpg)]'> <p className='absolute mt-[50px] text-[10px] '>Hot Coffee</p> </div>            
        </div>
      </section>
      <section className='max-w-screen-xl mx-auto h-[600px] py-5'>
        <h1 className='text-center mb-10 font-bold'>OUR SPECIAL COFFEE</h1>
        <div className='grid grid-cols-1 gap-5'>
          {/* first grid */}
          <div className='grid grid-cols-4  justify-items-center '>
            <Welcome image="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg" heading="Hot Coffee" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.159" />
            <Welcome image="https://www.fitfoodienutter.com/wp-content/uploads/2020/04/Dalgona-coffee-25-of-32-scaled.jpg" heading="Dalgona Coffee" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.199" /> 
             <Welcome image="https://images.pexels.com/photos/7488733/pexels-photo-7488733.jpeg" heading="Iced Coffee" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.149" /> 
             <Welcome image="https://tse2.mm.bing.net/th/id/OIP.l_1ZdelVWBuXP9fILPKGzwHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3" heading="filter coffee" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.59" /> 
         </div> 
         <h1 className='text-center py-5 font-bold '>OUR SPECIAL DESERT</h1>
         {/* second grid */}
         <div className='grid grid-cols-4  justify-items-center '>
          
            {/* <Welcome image="https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg " heading="Gulab Jammun" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.5199" />
            <Welcome image="https://images.pexels.com/photos/6126245/pexels-photo-6126245.jpeg" heading="Chocolate Tiramisu" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.250" />
            <Welcome image="https://www.theflavorbender.com/wp-content/uploads/2023/04/Churros-2879.jpg" heading="Churros" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.170" />
            <Welcome image="https://www.sugarsaltmagic.com/wp-content/uploads/2020/01/Traditional-Lamingtons-4-768x1152.jpg" heading="AustralianLamingtons" text="ajjidj alsjjil dlkkld hwyud bshuih jfdsjkjk ud jkhkhj huhsj" price="Rs.280" /> */}
            {welcomeData.map((data) => (
  <Welcome
    key={data.heading}
    image={data.image}
    heading={data.heading}
    text={data.text}
    price={data.price}
  />
))}

         
         </div> 
        </div>
      </section>
      <section className='max-w-screen-xl h-[150px] mt-5 justify-items-center bg-bottom bg-cover bg-[url(https://images.pexels.com/photos/261434/pexels-photo-261434.jpeg)]'>
      <h1 className=' pt-10 text-xl text-white'>Check out our best <br/> coffee betans</h1>
      <button className='bg-[#2F241D] rounded-xl text-[5px] h-[20px] w-[100px] text-white ml-[295px]'>Explore Our Product - </button>
      </section>
      <section className='max-w-screen-xl h-[175px] mt-[0px] mt-5 justify-items-center'>
        <h1 className='italic'>Come and join</h1>
        <h1 className='font-bold'>OUR HAPPY CUSTOMER</h1>
        <div className='flex gap-5 mt-5'>
        <div className='bg-white p-4 rounded-xl shadow-lg h-[90px] w-[220px]'>
          <div className=" flex items-center gap-2 ">
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-[20px] h-[20px] rounded-full"
              alt="profile"
            />
             <div>
              <h4 className="font-bold text-[7px] text-gray-800">Jane Adams</h4>
              <p className="text-[5px] text-gray-500">Freelancer</p>
            </div>
            <div>
            <p className=" absolute mt-[15px] ml-[-75px] text-gray-600 text-[6px]">
            I've been happy to have cooperative and friendly staff. The
            quality of <br /> the product is exceptional, and I appreciate the fast
            delivery. Highly <br /> recommended!
          </p>
          </div>
           </div>
        </div>
        <div className='bg-white p-4 rounded-xl shadow-lg h-[90px] w-[220px]'>
          <div className=" flex items-center gap-2 ">
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-[20px] h-[20px] rounded-full"
              alt="profile"
            />
             <div>
              <h4 className="font-bold text-[7px] text-gray-800">Same william</h4>
              <p className="text-[5px] text-gray-500">Entrepreneur</p>
            </div>
            <div>
            <p className=" absolute mt-[15px] ml-[-75px] text-gray-600 text-[6px]">
            I've been happy to have cooperative and friendly staff. The
            quality of <br /> the product is exceptional, and I appreciate the fast
            delivery. Highly <br /> recommended!
          </p>
          </div>
           </div>
        </div>
        <div className='bg-white p-4 rounded-xl shadow-lg h-[90px] w-[220px]'>
          <div className=" flex items-center gap-2 ">
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-[20px] h-[20px] rounded-full"
              alt="profile"
            />
             <div>
              <h4 className="font-bold text-[7px] text-gray-800">Angela</h4>
              <p className="text-[5px] text-gray-500">Manger</p>
            </div>
            <div>
            <p className=" absolute mt-[15px] ml-[-60px] text-gray-600 text-[6px]">
            I've been happy to have cooperative and friendly staff. The
            quality of <br /> the product is exceptional, and I appreciate the fast
            delivery. Highly <br /> recommended!
          </p>
          </div>
           </div>
        </div>
        </div>
      </section>
      <section className=' max-w-screen-xl h-[120px] mt-[0px] justify-items-center mt-[20px]'>
        <h1>Join in and get 15% off</h1>
        <p className='text-[7px] text-gray-600'>subscribe to our newsletter and get 15% off discount code </p>
        <div className='flex mt-[10px] gap-2'>
          <search className='h-[18px] w-[130px] border border-black rounded-xl p-[2px] '>
            <h1 className='text-[7px] ml-[4px]'>Email Address</h1>
          </search>
          <button className='h-[18px] w-[70px] bg-[#2F241D] rounded-xl '>
            <h1 className='text-white text-[13px]'>Subscribe</h1>
          </button>
        </div>
      </section>
      <footer className=' bg-[#2F241D]'>
        <div className="max-w-screen-xl mx-auto px-6 py-6">
         <div className=" grid grid-cols-5 gap-8 items-start  ">
            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">COFFEE</h1>
            </div>
         
         <div>
          <h3 className="font-semibold text-white mb-4 text-sm">PRIVACY</h3>
          <ul className="space-y-1 text-white text-[10px]">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
        </div>
         <div>
          <h3 className="font-semibold text-white mb-4 tracking-wide text-sm">SERVICES</h3>
          <ul className="space-y-1 text-white text-[10px]">
            <li>Shop</li>
            <li>Order ahead</li>
            <li>Menu</li>
          </ul>
        </div>
          <div>
          <h3 className="font-semibold text-white mb-4 tracking-wide text-sm">ABOUT US</h3>
          <ul className="space-y-2 text-white text-[10px]">
            <li>Find a location</li>
            <li>About us</li>
            <li>Our story</li>
          </ul>
        </div>
          <div>
          <h3 className="font-semibold text-white mb-4 tracking-wide text-sm">INFORMATION</h3>
          <ul className="space-y-2 text-white text-[10px]">
            <li>Plans & pricing</li>
            <li>Sell your products</li>
            <li>Jobs</li>
          </ul>
        </div>
        
        </div>
        </div>
      </footer>
    </>
  )
  
}
