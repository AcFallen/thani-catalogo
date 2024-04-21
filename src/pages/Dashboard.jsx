import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const { removeUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  // Obtener los productos desde el servidor o local storage
  useEffect(() => {
    // Aquí puedes hacer una llamada a la API o cargar los productos desde el local storage
    // y luego actualizar el estado con setProducts
  }, []);

  // Función para eliminar un producto
  const deleteProduct = (productId) => {
    // Aquí puedes implementar la lógica para eliminar el producto del servidor o del local storage
    // y luego actualizar el estado con setProducts
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    // Aquí puedes implementar la lógica para eliminar el usuario del local storage o del contexto de usuario
    // y luego redirigir al usuario a la página de inicio de sesión con history.push('/login')

    removeUser();
    navigate("/login");
  };

  return (
    <div>

      

      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
