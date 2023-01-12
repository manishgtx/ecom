import {AiOutlineSearch} from 'react-icons/ai'
const Search = () => {
  return (
    <div className='hidden md:flex items-center gap-2 border bg-[#f5f5f6] p-2 rounded flex-grow'>
        <AiOutlineSearch className='text-xl bg-transparent' />
        <input type="text" className='bg-[#f5f5f6] outline-none w-[100%]'  placeholder="Search Anything you want"/>
    </div>
  )
}

export default Search