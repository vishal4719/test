import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-600 text-white w-[110%]  ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Teacher Guardian System</h1>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex ${
            isMenuOpen ? 'block' : 'hidden'
          } bg-blue-600 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <a
                href="#profile"
                className="block px-6 py-2 hover:bg-blue-700 md:hover:bg-transparent"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                className="block px-6 py-2 hover:bg-blue-700 md:hover:bg-transparent"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#logout"
                className="block px-6 py-2 hover:bg-blue-700 md:hover:bg-transparent"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
