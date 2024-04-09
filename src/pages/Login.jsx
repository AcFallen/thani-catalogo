import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_tani.svg";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-svh bg-solid-pink-200 px-4">
      <div className=" bg-slate-50 border-2 border-solid-pink-500 rounded-2xl p-8 sm:max-w-sm md:max-w-md md:max-h-max shadow-lg">
        <Link to="/">
          <div className="drop-shadow-lg">
            <img
              className="max-w-full h-auto md:max-w-60"
              src={Logo}
              alt="logo_thani"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-solid-pink-800">Usuario</h2>
          <input
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="text"
          />
          <h2 className="font-bold text-solid-pink-800">Contraseña</h2>
          <input
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="password"
          />
          <button className=" hover:bg-solid-pink-200 bg-gradient-to-b from-solid-pink-700 to-solid-pink-800 py-2 rounded-md text-white font-bold ">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
