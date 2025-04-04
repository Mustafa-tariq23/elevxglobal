import React from "react";
import SliderForHomePage from "./Slider";

const Testimonial = () => {
  return (
    <section data-aos="fade-up" ease-in-out-quart className="bg-white ">
      <div className="container py-24 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-[#15307c] ">
          Our Partners
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
          We collaborate with industry-leading partners to deliver cutting-edge
          IT solutions, outsourcing services, and digital transformation
          strategies. Our partnerships with top technology providers, software
          vendors, and business solution experts ensure that we offer the most
          reliable, scalable, and future-proof solutions for our clients.
        </p>

        <SliderForHomePage />
      </div>
    </section>
  );
};

export default Testimonial;
