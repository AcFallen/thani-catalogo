import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct((prevProduct) => {
      // Si el modal está abierto y el producto es el mismo que el anterior, retorna un nuevo objeto con las mismas propiedades
      if (prevProduct && prevProduct.id === product.id) {
        return { ...prevProduct };
      }
      // De lo contrario, retorna un nuevo objeto con las propiedades del nuevo producto
      return { ...product };
    });
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    };

    const fetchCategories = async () => {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === value);
      setFilteredProducts(filtered);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
    <Navbar />
      <div className="container flex justify-center p-8 gap-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar productos..."
          className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-solid-pink-200"
        />

        <select onChange={handleFilterChange} className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-solid-pink-400">
          <option value="">Categorias</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="space-y-3 flex flex-col items-center bg-white p-4 rounded-md shadow-md shadow-solid-pink-200"
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                onClick={() => handleCardClick(product)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className=" h-[200px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-solid-pink-600" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedProduct && (
        <Modal
          product={selectedProduct} // Pasas el producto seleccionado a Modal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Catalog;
