import { useState } from "react";

import Logo from "../assets/logo_tani.svg";
import { RiStore2Line } from "react-icons/ri";
import { RiServerLine } from "react-icons/ri";
import { RiLogoutBoxLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [siderbar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!siderbar);
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
      {/* siderbar */}
      <div
        className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${
          siderbar ? "-left-0" : "-left-full"
        }   w-full h-screen overflow-y-hidden col-span-1 p-8 border shadow-md shadow-solid-pink-500`}
      >
        {/* Logotipo */}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking[4px]">thani dashboard</h1>
        </div>

        <div className=" flex flex-col justify-between h-[500px]">
          {/* Menú */}
          <nav>
            <ul>
              <li>
                <Link className="flex items-center gap-4 hover:bg-solid-pink-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiStore2Line />
                  Productos
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 hover:bg-solid-pink-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiServerLine />
                  Inventario
                </Link>
              </li>
            </ul>
          </nav>
          {/* comentario img logout */}
          <div className="flex flex-col gap-4">
            <img src="avatar.svg" alt="avatar" />
            <Link className="flex items-center gap-4 hover:bg-solid-pink-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
              <RiLogoutBoxLine />
              Salir
            </Link>
          </div>
        </div>
      </div>
      {/* botoon meno movil */}
      <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-solid-pink-700 p-2 text-white rounded-full text-2xl">

        {siderbar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* contenido */}
      <div className="col-span-5">
        {/* header */}
        <header>
          Hola mundo
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
