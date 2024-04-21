import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo_tani.svg";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({ correo: "", password: "" });
  const { storeUser } = useContext(UserContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { correo, password } = form;

    const response = await fetch("http://127.0.0.1:80/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, password }),
    });

    if (!response.ok) {
      setError("Usuario o contraseña incorrectos");
      setForm({
        correo: "",
        password: "",
      });

      return;
    }

    const responseData = await response.json();

    if (response.ok) {
      storeUser(responseData.content);
      navigate("/dashboard");
    } else {
      setError(responseData.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-svh bg-solid-pink-200 px-4">
      <form
        onSubmit={handleLogin}
        className=" bg-slate-50 border-2 border-solid-pink-500 rounded-2xl p-8 sm:max-w-sm md:max-w-md md:max-h-max shadow-lg"
      >
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
            name="correo"
            value={form.correo}
            onChange={handleChange}
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="email"
            required={true}
          />
          <h2 className="font-bold text-solid-pink-800">Contraseña</h2>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border focus:border-solid-pink-800"
            type="password"
            required={true}
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
