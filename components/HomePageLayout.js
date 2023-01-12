import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
import Submenu from './Navbar/Submenu';
import { useSelector } from 'react-redux';
const HomePageLayout = ({children}) => {
  const {isSubmenuOpen} = useSelector((state) => state.nav)
  return (
    <div>
      <Sidebar />
      <Navbar />
      {isSubmenuOpen && <Submenu />}
      {children}
      <Footer />
    </div>
  )
}

export default HomePageLayout