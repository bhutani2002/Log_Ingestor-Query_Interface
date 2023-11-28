import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 text-white flex justify-between items-center">
      <div>
        <span className="font-bold text-2xl cursor-pointer" onClick={scrollToTop}>Log Ingestor & Query Interface</span>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="logs" className="cursor-pointer font-bold hover:underline text-[18px]" smooth={true} duration={500}>
            Logs
          </Link>
        </li>
        <li>
          <Link to="logs_ingestor" className="cursor-pointer font-bold hover:underline text-[18px]" smooth={true} duration={500}>
            Manual Log Ingestor
          </Link>
        </li>
        <li>
          <Link to="search_logs" className="cursor-pointer font-bold hover:underline text-[18px]" smooth={true} duration={500}>
            Search Logs
          </Link>
        </li>
        <li>
          <Link to="search_results" className="cursor-pointer font-bold hover:underline text-[18px]" smooth={true} duration={500}>
            Search Results
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar