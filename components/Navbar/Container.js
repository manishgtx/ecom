import { IoBagOutline } from 'react-icons/io5'
import { BsPerson, BsHeart } from "react-icons/bs"
const Container = () => {
  return (
      <ul className='flex items-baseline gap-6'>
      <li>
        <span className='flex justify-center'>
        <BsPerson className='text-xl'/>
        </span>
        <h6 className='text-xs'>Profile</h6>
      </li>
      <li>
        <span className='flex justify-center'>
        <BsHeart className='text-lg'/>
        </span>
        <h6 className='text-xs'>Wishlist</h6>
      </li>
      <li>
        <span className='flex justify-center'>
        <IoBagOutline className='text-lg'/>
        </span>
        <h6 className='text-xs'>Bag</h6>
      </li>
      </ul>
  )
}

export default Container