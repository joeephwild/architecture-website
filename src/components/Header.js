import React from 'react'

const Header = () => {
  return (
    <div style={{ fontFamily: "Libre Bodoni"}} className='flex bg-transparent p-8 w-full px-4 sticky z-10 justify-evenly items-center'>
       
       <ul className='md:inline-flex text-[#FFD700] hidden space-x-6'>
         <li>Home</li>
         <li>About</li>
         <li>Projects</li>
         <li>Blog</li>
         <li>Contact</li>
         <li>CSR Projects</li>
       </ul>
       <span className='font-bold text-[#fafafa] text-3xl'>SUJIMOTO</span> 
       
       <span className='bg-[#FFD700] text-[#fafafa] px-6 py-2 rounded-xl'>Schedule Appointment</span>
       </div>
  )
}

export default Header