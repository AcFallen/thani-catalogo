import React from "react";
import Logo from "../assets/logo_tani.svg";
import { RiStore2Line } from "react-icons/ri";
import { RiServerLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1 p-8">
        {/* Logotipo */}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking[4px]">thani dashboard</h1>
        </div>

        <div className=" bg-solid-pink-700 flex flex-col justify-between h-full">
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

      <div className="col-span-5"></div>
    </div>
  );
};

export default Dashboard;
