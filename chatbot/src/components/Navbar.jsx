import { Link } from 'react-router-dom';
import favicon from '../assets/favicon.jpeg';
import { navLinks } from '../constants/index';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navbar bg-primary-97 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={favicon} alt="chatML" className="w-[75px] h-[65px]" />
          <div className="hidden sm:flex space-x-4">
            <Link to="/login">
              <button className="button-style shiny-button">LOGIN</button>
            </Link>
            <Link to="/signup">
              <button className="button-style shiny-button">SIGNUP</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-lime-50 space-x-5">
            {navLinks.map((nav, index) => (
              <li className="font-poppins" key={index}>
                <a href={nav.path}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex items-center">
          {toggle ? (
            <FaTimes className="text-white" size={30} onClick={() => setToggle(!toggle)} />
          ) : (
            <FaBars className="text-white" size={30} onClick={() => setToggle(!toggle)} />
          )}
        </div>
        {toggle && (
          <div className="bg-black-gradient sidebar absolute p-3 z-10 top-20 right-4 min-w-[170px] min-h-[160px] rounded-xl">
            <ul className="list-none flex flex-col items-center text-2xl text-lime-50 space-y-4">
              {navLinks.map((nav, index) => (
                <li className="font-poppins mt-2 uppercase" key={index}>
                  <a href={nav.path}>{nav.name}</a>
                </li>
              ))}
              <div className="flex flex-col items-center space-y-2">
                <Link to="/login">
                  <button className="button-style shiny-button button-sm" style={{ letterSpacing: '0.1em' }}>LOGIN</button>
                </Link>
                <Link to="/signup">
                  <button className="button-style shiny-button button-sm" style={{ letterSpacing: '0.1em' }}>SIGNUP</button>
                </Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
