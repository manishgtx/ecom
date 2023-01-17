import React from 'react'
import {motion} from 'framer-motion'
import GenCategory from '../Navbar/GenCategory'
import { mobileData } from '../../meta/links'
const GenDataContainer = ({isSelected,setIsSelected}) => {
  return (
    <motion.div exit={{x:'-100%' }} transition={{ duration: 1 }}>{mobileData.map((genData) => {
        return <GenCategory key={genData.id} {...genData} isSelected={isSelected} setIsSelected={setIsSelected}/>
      })}</motion.div>
  )
}

export default GenDataContainer