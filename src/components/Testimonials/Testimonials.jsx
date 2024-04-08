import React from "react";
import Slider from "react-slick";
import { FaRegUser } from "react-icons/fa";

const TestiominalData = [
  {
    id: 1,
    name: "Juan Pérez",
    text: "¡Excelente servicio! Me ayudaron a resolver mi problema rápidamente.",
  },
  {
    id: 2,
    name: "María González",
    text: "Estoy muy contenta con el producto. Funciona perfectamente.",
  },
  {
    id: 3,
    name: "Pedro López",
    text: "¡Increíble experiencia! El equipo de atención al cliente fue muy amable y servicial.",
  },
  {
    id: 4,
    name: "Pedro López",
    text: "¡Increíble experiencia! El equipo de atención al cliente fue muy amable y servicial.",
  },
  {
    id: 5,
    name: "Pedro López",
    text: "¡Increíble experiencia! El equipo de atención al cliente fue muy amable y servicial.",
  },
  {
    id: 6,
    name: "Pedro López",
    text: "¡Increíble experiencia! El equipo de atención al cliente fue muy amable y servicial.",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className=" text-center mb-10 max-w[600px] mx-auto">
          <p className="text-sm text-solid-pink-600">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="text-3xl font-bold" data-aos="fade-up">
            Testimonios
          </h2>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        {/* testimonials section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestiominalData.map((data) => (
              <div className="my-6"  key={data.id}>
                <div
                 
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-solid-pink-200 relative items-center"
                >
                  <div className="mb-4">
                    <FaRegUser className=" rounded-md w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h3 className="text-xl font-bold text-black/80">
                        {data.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
