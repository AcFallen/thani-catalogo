import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="https://mercadopuntoverde.com/wp-content/uploads/2014/04/alimentos-organicos-1024x576.jpg"
              alt="imagen_de_producto"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h2 className="text-3xl sm:text-4xl font-bold">Compras de Otoño descuento 10%</h2>
            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis, aspernatur iste repellat obcaecati at eum, minima pariatur quod dicta, modi esse laboriosam hic sit quibusdam eos rerum delectus! Quis?</p>
            <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                    <p>Calidad de Productos</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100"/>
                    <p>Calidad de Productos</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100"/>
                    <p>Calidad de Productos</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
