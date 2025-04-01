import React from "react";

const ServicesDetails = ({ h3, itemsHeading, itemsDetails }) => {
  return (
    <div data-aos="fade-up">
      <h3
        data-aos="fade-up"
        className="text-2xl delay-100 text-[#15307c] font-bold pb-4"
      >
        {h3}
      </h3>
      <ul
        data-aos="fade-up"
        className="flex flex-col gap-2 delay-300 text-gray-500 font-semibold cursor-pointer"
      >
        {itemsHeading.map((heading, index) => (
          <li key={index} className="text-justify">
            <strong>{heading}:</strong> {itemsDetails[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesDetails;
