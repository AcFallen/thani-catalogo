import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=5`);
      const data = await response.json();
      // console.log(data)
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className=" py-14 bg-gray-100">
      <div className="container">
        {/* header section */}
        <div className=" text-center mb-10 max-w[600px] mx-auto">
          <p className="text-sm text-solid-pink-600">Productos mas vendidos</p>
          <h2 className="text-3xl font-bold" data-aos="fade-up">
            Productos
          </h2>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {/* card section */}
            {products.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-col items-center gap-2 space-y-3 bg-white p-4 rounded-md shadow-md shadow-solid-pink-200"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                >
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className=" h-[200px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.description}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-solid-pink-600" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Link
              to="/catalog"
              className="text-center mt-10 cursor-pointer bg-solid-pink-500 text-white py-1 p-2 rounded-md"
            >
              Mirar todo los productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
