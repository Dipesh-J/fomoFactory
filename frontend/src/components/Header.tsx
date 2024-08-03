import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 bg-opacity-90 text-white p-4 fixed w-full top-0 z-50 shadow-lg transition-all duration-300 ease-in-out backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-graph-up-arrow"
            viewBox="0 0 16 16"
            aria-label="UptrendX Logo"
          >
            <path
              fillRule="evenodd"
              d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <h1 className="text-3xl font-bold tracking-tight">UptrendX</h1>
        </div>
        
        {/* User Info */}
        <div className="hidden md:flex flex-col items-end">
          <p className="font-semibold">Dipesh Joshi</p>
          <p>dipeshjoshi015@gmail.com</p>
          <p>+918368483931</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
