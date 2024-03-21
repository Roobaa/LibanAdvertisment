import { useState } from 'react'
import { Link } from 'react-scroll'
const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const menuHandler = () => {
    setOpenMenu(prevState => !prevState)
  }

  return (
    <header className="bg-black text-white py-6 sticky top-0">
      <div className="container hidden md:flex mx-auto  justify-between items-center px-8 md:px-16  ">
        <div className="text-2xl font-bold ">LIBAN</div>
        <nav>
          <ul className="flex justify-end space-x-10 ">
            <li><Link to="Home" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="Services" className="hover:text-gray-500">Services</Link></li>
            <li><Link to="About" className="hover:text-gray-500">About</Link></li>
            <li><Link to="ContactUS" className="hover:text-gray-500">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      <div className={`container flex flex-col md:hidden  px-8 md:px-16  gap-7 `}>
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold ">LIBAN</h1>
          <svg className={`w-7 ${!openMenu && "hidden"}`} onClick={menuHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
          <svg className={`w-7 ${openMenu && "hidden"}`} onClick={menuHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
        <ul className={`flex flex-col gap-3  ${openMenu ? "flex" : "hidden"}`}>
          <li><Link to="Home" onClick={() => setOpenMenu(false)} smooth className="hover:text-gray-500">Home</Link></li>
          <li><Link to="Services" onClick={() => setOpenMenu(false)} smooth className="hover:text-gray-500">Services</Link></li>
          <li><Link to="About" onClick={() => setOpenMenu(false)} smooth className="hover:text-gray-500">About</Link></li>
          <li><Link to="ContactUS" onClick={() => setOpenMenu(false)} smooth className="hover:text-gray-500">Contact Us</Link></li>
        </ul>

      </div>
    </header>
  )
}
export default Header;