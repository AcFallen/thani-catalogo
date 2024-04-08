import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div data-aos="zoom-in" className=" bg-solid-pink-200 mb-20">
      <div className=" container backdrop-blur-sm py-10">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold ">
            Recibe notificaciones de nuestros nuevos productos
          </h2>
          <input data-aos="fade-up"
            type="text"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-3"
          />
          {/* <button type="submit">Subscribe</button> */}
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
