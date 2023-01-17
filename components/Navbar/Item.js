import React from 'react'

const Item = ({category,subCategory,isSelected,setIsSelected}) => {
  return (
    <h2 className='text-xl py-3 px-4' onClick={() => setIsSelected({category,subCategory})}>{category}</h2>
  )
}

export default Item