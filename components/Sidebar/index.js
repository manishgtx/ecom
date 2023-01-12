import React from 'react'
import {GrFormClose} from 'react-icons/gr'
const index = () => {
  return (
    <div className='bg-slate-900/60 w-screen h-screen absolute z-50 md:hidden'>
        <div className='w-[92%] mx-auto mt-8 pb-24 px-3 bg-white rounded-xl'>
            <div className='flex items-center justify-between'>
            <img src="./assets/images/Navbar/ebay.png" className='w-16' alt="" />
            <GrFormClose className='text-3xl'/>
            </div>
            
        </div>
    </div>
  )
}

export default index