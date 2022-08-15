import React from 'react'

const Header = () => {
  return (
    <div style={{ fontFamily: "Libre Bodoni"}} className='flex bg-white p-8 w-full px-4 sticky z-10 justify-between items-center'>
       <span className='font-bold text-[#b56350] text-xl'>SUJIMOTO</span> 
       <ul className='flex space-x-6'>
         <li>Home</li>
         <li>About</li>
         <li>Projects</li>
         <li>Blog</li>
         <li>Contact</li>
         <li>CSR Projects</li>
       </ul>
       <span className='bg-[#b56350] text-[#fafafa] px-6 py-2 rounded-xl'>Schedule Appointment</span>
       </div>
  )
}

export default Header