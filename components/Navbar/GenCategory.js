import {useState} from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Item from './Item'
const GenCategory = ({name,genCategory,category,isSelected,setIsSelected}) => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
        <div className='bg-[#F6F9FB] px-5 py-6 flex justify-between items-center' onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <h1 className='font-semibold text-lg text-[#3F4B66]'>{name}</h1>
            <MdKeyboardArrowRight className='text-3xl text-[#3F4B66]'/>
        </div>
        {isOpen && genCategory.map((item) => {
            return <Item key={item.id} {...item} isSelected={isSelected} setIsSelected={setIsSelected}/>
        })}
    </div>
  )
}

export default GenCategory