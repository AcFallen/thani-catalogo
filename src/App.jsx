import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials/Testimonials";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products/>
      <Banner></Banner>
      <Subscribe />
      <Testimonials/>
    </div>
  );
};

export default App;
