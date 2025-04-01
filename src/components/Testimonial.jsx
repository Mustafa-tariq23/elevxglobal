import React from 'react';
import SliderForHomePage from "./Slider";

const Testimonial = () => {
  return (
    <section data-aos="fade-up" ease-in-out-quart className="bg-white ">
      <div className="container py-24 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-[#15307c] ">
          Our Partners
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
          Hear how our exceptional recruiting and consultation services have
          made a difference in the lives of job seekers and employers.
        </p>

        <SliderForHomePage />
      </div>
    </section>
  );
};

export default Testimonial;
