import LinksContainer from "./LinksContainer"
import Search from "./Search"
import Container from "./Container"
import { FaBars } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { closeSubmenu } from "../../store"
const index = () => {
  const dispatch = useDispatch();
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('nav-link')){
      dispatch(closeSubmenu())
    }
  }
  return (
    <div className="shadow-md px-4 sm:px-10 sticky top-0" onMouseOver={handleSubmenu}>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-20">
                <img src="./assets/images/Navbar/ebay.png" alt="" className="w-16"/>
                <LinksContainer />  
            </div>      
        {/* Search */}
        {/* <Search /> */}
        <Container />
        <button className=" sm:hidden">
          <FaBars className='text-2xl' onClick={() => setSideBar(true)}/>
        </button>
        </div>
    </div>
    
  )
}

export default index