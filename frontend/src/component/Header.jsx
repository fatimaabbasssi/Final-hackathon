import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { removeToken, removeUser } from '../utils/auth';

const Header = () => {

  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);



  /////logout
  const handleLogout = () => {
    removeUser();
    removeToken();
    navigate("/logout");
  };



  return (
    <>

      {/* toggle solved */}

      <nav className="navCustom bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex font-bold text-3xl items-center text-black space-x-3 rtl:space-x-reverse ">
            Hijab Review
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex bg-white  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


              <li className=' text-black'>
                <NavLink to='/' className={({ isActive }) => isActive ? "block py-1 px-2" : "text-gray-500 block py-1 px-2"} aria-current="page">Home</NavLink>
              </li>
              {/* <li className=' text-black'>
                <NavLink to='/questions' className={({ isActive }) => isActive ? "block py-1 px-2" : "text-gray-500 block py-1 px-2"} aria-current="page">My Questions</NavLink>
              </li> */}

              {/* <li className=' text-black'>
                <NavLink to='/ask' className={({ isActive }) => isActive ? "block py-1 px-2" : "text-gray-500 block py-1 px-2"} aria-current="page"><i class="fa-solid fa-pencil"></i>Ask</NavLink>
              </li> */}

              <li className=' text-black mt-1'>
                <button onClick={handleLogout} className={({ isActive }) => isActive ? "block py-1 px-2" : "text-gray-500 block py-1 px-2"} aria-current="page"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
              </li>
            </ul>


          </div>
        </div>
      </nav>


    </>
  )
}

export default Header