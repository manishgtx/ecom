import React from 'react'
import { useDispatch } from 'react-redux'
import { openSubmenu } from '../../store';
const LinksContainer = () => {
  const dispatch = useDispatch();
  return (
        <ul className=' font-cabin font-semibold text-lg text-[#282C3F] hidden md:flex items-stretch links-container'>
            <li className='nav-link' onMouseEnter={(e) => dispatch(openSubmenu(e.target.textContent))}>Men</li>
            <li className='nav-link' onMouseEnter={(e) => dispatch(openSubmenu(e.target.textContent))}>Women</li>
            <li className='nav-link' onMouseEnter={(e) => dispatch(openSubmenu(e.target.textContent))}>Kids</li>
            <li className='nav-link' onMouseEnter={() => dispatch(openSubmenu())}>Home & Living</li>
            <li className='nav-link' onMouseEnter={() => dispatch(openSubmenu())}>Beauty</li>
        </ul>
  )
}

export default LinksContainer