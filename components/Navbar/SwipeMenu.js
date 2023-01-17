import React from 'react'
import {motion,} from 'framer-motion'
const SwipeMenu = ({isSelected}) => {
  return (
        <motion.div animate={{x:'-100%'}} transition={{ duration: 0.8 }} exit={{x:'100%'}} className='swipe-menu'>
        {isSelected.map((item) => {
            return <h1 key={item.id} className='instance text-xl py-3 px-4'>{item.title}</h1>
        })}
    </motion.div>
  )
}

export default SwipeMenu