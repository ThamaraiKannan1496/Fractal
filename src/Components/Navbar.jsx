import { useState } from "react";
import "../index.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" bg-white shadow-lg font-inter">
      <div className="md:w-[89%] mx-auto">
        <nav className="flex justify-between items-center">
          <div className="py-4">
            <a href="#" className="text-3xl font-bold tracking-wide md:ms-14">
              fractal
              <span className="ms-1 font-extrabold text-4xl">
                <span className="text-[#E42D20]">.</span>
                <span className="text-[#F9B31C]">.</span>
                <span className="text-[#0090C4]">.</span>
              </span>
            </a>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <a href="#">AI for good</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">AI Innovation Center</a>
            </li>
            <li>
              <a href="#">Webinars & Events</a>
            </li>
            <li>
              <a href="#">AI:sight</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a
                href="#"
                className="ms-5 font-bold bg-[#FCD300] py-3 px-5 border border-black rounded-full"
              >
                Contact us
              </a>
            </li>
          </ul>
          <button className="lg:hidden mobile-icon" onClick={toggleMenu}>
            <svg
              className="h-10 w-10 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Nav  */}
      <div className="lg:hidden  mobile-menu">
        {isMenuOpen ? (
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <a href="#">AI for good</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">AI Innovation Center</a>
            </li>
            <li>
              <a href="#">Webinars & Events</a>
            </li>
            <li>
              <a href="#">AI:sight</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a
                href="#"
                className="ms-5 font-bold bg-[#FCD300] py-3 px-5 border mb-12 border-black rounded-full"
              >
                Contact us
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
