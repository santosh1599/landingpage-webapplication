import React from "react";

const NavebarSection = () => {
  return (
    <div>
      <section>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="assets\logo.png"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">QuickStart</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a href="#home" className="mr-5 text-cyan-500 ">
                Home
              </a>

              <a href="#about" className="mr-5 hover:text-cyan-500 ">
                About
              </a>
              <a href="#features" className="mr-5 hover:text-cyan-500 ">
                Features
              </a>
              <a href="#services" className="mr-5 hover:text-cyan-500 ">
                Services
              </a>
              <a href="#pricing" className="mr-5 hover:text-cyan-500 ">
                Pricing
              </a>
              <a href="#dropdown" className="mr-5  hover:text-cyan-500 ">
                Dropdown
              </a>
              <a href="#contact" className="mr-5 hover:text-cyan-500 ">
                Contact
              </a>
            </nav>
            <button className="inline-flex items-center bg-cyan-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-cyan-600 rounded text-base mt-4 md:mt-0">
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
      </section>
    </div>
  );
};

export default NavebarSection;