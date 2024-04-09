import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Modal = ({ product, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [product]);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg w-96">
          <img src={product.images[1]} alt={product.description} />
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="mb-4">S/{product.price}</p>
          <p className="mb-4">{product.description}</p>
          <img src={product.image} alt={product.name} />

          <div className="flex justify-between">
            <button className="bg-solid-pink-500 text-white py-2 px-4 rounded-lg flex items-center gap-3">
                <FaWhatsapp />
              Hacer pedido
            </button>
            <button
              onClick={onClose}
              className="bg-solid-pink-500 text-white py-2 px-4 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
