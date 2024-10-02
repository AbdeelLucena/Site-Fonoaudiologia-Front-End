import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <header class="text-gray-600 body-font bg-[#E9F9EA]">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} />
      <span class="text-[#608BFF] ml-3 text-xl font-bold">fono.fun</span>
    </a>
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link to="/">
      <a class="mr-5 hover:text-gray-900">Página Inicial</a>
      </Link>
      <a class="mr-5 hover:text-gray-900">Paciente</a>
      <a class="mr-5 hover:text-gray-900">Sobre</a>
      <a class="mr-5 hover:text-gray-900">Contato</a>
    </nav>
    <Link to="/login">
    <a class="mr-5 hover:text-gray-900">Login</a>
    </Link>
    <Link to="/signup">
    <button className="inline-flex items-center bg-[#608BFF] text-white rounded-full py-2 px-3 focus:outline-none hover:bg-[#608BFF]-200 text-base mt-4 md:mt-0">
      Cadastre-se
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar