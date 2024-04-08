import React from "react";
import Logo from "../../assets/logo_tani.svg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Ejemplo",
    link: "/#",
  },
  {
    id: 3,
    name: "Ejemplo",
    link: "/#",
  },
  {
    id: 4,
    name: "Abbout",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "pescados",
    link: "/#",
  },
  {
    id: 2,
    name: "yogurt",
    link: "/#",
  },
  {
    id: 3,
    name: "conserva",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className=" duration-200 relative z-40 shadow-md">
      <div className=" bg-solid-pink-100 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Logo} alt="logo_thani" className="w-20" />
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-solid-pink-400"
              />
              <IoMdSearch className=" text-gray-500 group-hover:text-solid-pink-700 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("la orden no esta disponible")}
              className=" bg-gradient-to-r from-solid-pink-600 to-solid-pink-900 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Login
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className=" inline-block px-4 hover:text-solid-pink-700 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Categorias
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className=" inline-block w-full rounded-md p-2 hover:bg-solid-pink-200">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
