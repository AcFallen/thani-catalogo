import React from "react";
import { Link , useNavigate } from "react-router-dom";
import Logo from "../assets/logo_tani.svg";
import { useState } from "react";

const Login = () => {

  const [correo , setCorreo] = useState('');
  const [password , setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://127.0.0.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo, password }),
    })

    if (!response.ok) {
      // Manejar error
      console.error('Error en la respuesta de la API');
      setError('Correo o contraseña incorrecta');
      return;
    }

    const data = await response.json();

    navigate('/dashboard');



    // Actualizar el estado de la aplicación con los datos recibidos
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center min-h-svh bg-solid-pink-200 px-4">
      <form onSubmit={handleSubmit} className=" bg-slate-50 border-2 border-solid-pink-500 rounded-2xl p-8 sm:max-w-sm md:max-w-md md:max-h-max shadow-lg">
        <Link to="/">
          <div className="drop-shadow-lg">
            <img
              className="max-w-full h-auto md:max-w-60"
              src={Logo}
              alt="logo_thani"
            />
          </div>
        </Link>
        {error && <p>{error}</p>}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-solid-pink-800">Correo</h2>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="text"
          />
          <h2 className="font-bold text-solid-pink-800">Contraseña</h2>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="password"
          />
          <button className=" hover:bg-solid-pink-200 bg-gradient-to-b from-solid-pink-700 to-solid-pink-800 py-2 rounded-md text-white font-bold ">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
