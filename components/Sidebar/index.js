import {useState} from 'react'
import {GrFormClose} from 'react-icons/gr'
import SwipeMenu from '../Navbar/SwipeMenu'
import GenDataContainer from '../Navbar/GenDataContainer'
import { AnimatePresence,motion } from 'framer-motion'
const index = () => {
  const [isSelected,setIsSelected] = useState({category:'',subCategory:[]});
  return (
    <div className='bg-slate-900/60 w-screen h-screen absolute z-50 md:hidden'>
        <div className='w-[92%] h-[92%] mx-auto mt-8 bg-white rounded-xl overflow-y-scroll relative'>
            <div className='flex items-center justify-between px-3 sticky z-10 top-0 left-0 bg-white'>
              <img src="./assets/images/Navbar/ebay.png" className='w-16' alt="" />
              <h1 onClick={() => setIsSelected({category:'',subCategory:[]})}>Back</h1>
              <GrFormClose className='text-3xl'/>
            </div>
            <div>
              <AnimatePresence>
              {isSelected.subCategory.length == 0 && <GenDataContainer isSelected={isSelected} setIsSelected={setIsSelected}/>}
              </AnimatePresence>
            <AnimatePresence>
              {isSelected.subCategory.length !== 0 && <SwipeMenu isSelected={isSelected.subCategory}/>}
              </AnimatePresence>
            </div>
            
        </div>
    </div>
  )
}

export default index