import { useSelector,useDispatch } from "react-redux"
import { closeSubmenu } from "../../store";
import { data } from '../../meta/links'
const Submenu = () => {
  const dispatch = useDispatch();
  const {isSubmenuOpen,list} = useSelector((state) => state.nav)
  const handleClose = (e) => {
      if(!e.target.classList.contains('display')){
        dispatch(closeSubmenu())
      }
  }
  return (
    <div className={`submenu-wrapper show`} onMouseOver={handleClose}>
      <ul className='submenu display'>
        <li className="submenu-child-wrapper display">
        {list?.col1?.map((list)=>{
          return <div key={list.id} className="display">
            <h4 className="items-title display">{list.category.title}</h4>
            {list?.subCategory?.map((item) => {
              return <p key={item.id} className="items-para display">{item.title}</p>
            })}
          </div>
        })}
        </li>
        <li className="submenu-child-wrapper display">
        {list?.col2?.map((list)=>{
          return <div key={list.id} className="display">
            <h4 className="items-title display">{list.category.title}</h4>
            {list?.subCategory?.map((item) => {
              return <p key={item.id} className="items-para display">{item.title}</p>
            })}
          </div>
        })}
        </li>
        <li className="submenu-child-wrapper display">
        {list?.col3?.map((list)=>{
          return <div key={list.id} className="display">
            <h4 className="items-title display">{list.category.title}</h4>
            {list?.subCategory?.map((item) => {
              return <p key={item.id} className="items-para display">{item.title}</p>
            })}
          </div>
        })}
        </li>
        <li className="submenu-child-wrapper display">
        {list?.col4?.map((list)=>{
          return <div key={list.id} className="display">
            <h4 className="items-title display">{list.category.title}</h4>
            {list?.subCategory?.map((item) => {
              return <p key={item.id} className="items-para display">{item.title}</p>
            })}
          </div>
        })}
        </li>
        <li className="submenu-child-wrapper display">
        {list?.col5?.map((list)=>{
          return <div key={list.id} className="display">
            <h4 className="items-title display">{list.category.title}</h4>
            {list?.subCategory?.map((item) => {
              return <p key={item.id} className="items-para display">{item.title}</p>
            })}
          </div>
        })}
        </li>
      </ul>

    </div>
  )
}

export default Submenu