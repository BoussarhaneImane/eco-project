import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Button from "../Shared/Button";

const Navbar = ({ handleOrderPopup }) => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [userName, setUserName] = useState('');


  // Exécuté à chaque fois que userName est mis à jour
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchHover = () => {
    setIsSearchHovered(!isSearchHovered);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };
  /* Vérifie si le chemin actuel est "/login" ou "/register"
  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';

  // Si le chemin actuel est "/login" ou "/register", retourne null (ne rend pas le Navbar)
  if (isLoginOrRegister) {
    return null;
  }*/
  return (
    <nav className="bg-gray-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" id='logo'>
            <Link to="/" className="flex items-center text-green-700">
              <span className="mr-0" id="LOGOT">H</span>
              <IoHome className="text-xl" id="LOGO" />
              <span className="mr-0" id="LOGOT">ME</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="text-green-700" id='nav-link'>Home</Link>
            <Link to="/about" className="text-green-700" id='nav-link'>About US</Link>
            <Link to="/shop" className="text-green-700" id='nav-link'>Shop</Link>

            {userName ? (
              <>
              
              <span className="text-black flex items-center">
              <span className="mr-1">Welcome</span>
              <FaUser className="mr-1" /> 
               {userName}</span>


                <Link to="/" onClick={handleLogout} className="text-green-700" id='nav-link'>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register" className="text-green-700" id='nav-link'>Sign Up</Link>
                <Link to="/login" className="text-green-700" id='nav-link'>Log In</Link>
              </>
            )}

            <div
              className="flex items-center border p-1 rounded-full"
              onMouseEnter={handleSearchHover}
              onMouseLeave={handleSearchHover}
            >
              <FaSearch className="text-zinc-950 cursor-pointer"  />
              {isSearchHovered && (
                <input type="text" placeholder="Search..." className="outline-none ml-1 text-xs" />
              )}
            </div>
            <div className='w-28 text-xs'>
              <Button
                text="Contact Us"
                bgColor="bg-zinc-950"
                textColor="text-white"
                handler={handleOrderPopup}
              />
            </div>
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleDropdown} className="text-green-700">
              {isDropdownOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <div className="ml-10 flex flex-col space-y-2">
              <Link to="/" className="text-green-700">Home</Link>
              <Link to="/about" className="text-green-700">About</Link>
              <Link to="/shop" className="text-green-700">Shop</Link>
          
              {userName ? (
              <>
              
              <span className="text-black flex items-center">
              <span className="mr-1">Welcome</span>
              <FaUser className="mr-1" /> 
               {userName}</span>


                <Link to="/" onClick={handleLogout} className="text-green-700" >Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register" className="text-green-700" >Sign Up</Link>
                <Link to="/login" className="text-green-700" >Log In</Link>
              </>
            )}

              <Button
                text="Contact Us"
                bgColor="bg-zinc-950"
                textColor="text-white"
                handler={handleOrderPopup}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



