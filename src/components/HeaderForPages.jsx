// import React from "react";
// import Navbar from "./Navbar";

// const HeaderForPages = (props) => {
//   const { heading, para } = props;

//   return (
//     <div data-aos="fade-up">
//       <Navbar />
//       <div className="bg-[#15307c] h-[30rem] flex flex-col justify-center sm:justify-end items-center pb-12 sm:pb-24 gap-4">
//         <h1
//           data-aos="fade-up"
//           className="text-4xl -mb-24 sm:m-0 sm:p-0 sm:text-4xl xs:text-3xl p-8 font-bold flex flex-wrap text-white"
//         >
//           {heading}
//         </h1>
//         <p
//           data-aos="fade-up"
//           className="w-[50%] sm:w-[70%] xs:w-[90%] hidden sm:block text-center p-4 text-gray-200 text-lg sm:text-base xs:text-sm"
//         >
//           {para}
//         </p>
//       </div>
//       <svg
//         className="fill-[#15307c] border-gray-100 bg-gray-100"
//         viewBox="0 0 1440 57"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
//       </svg>
//     </div>
//   );
// };

// export default HeaderForPages;
import Navbar from "./Navbar";

const HeaderForPages = (props) => {
  const { heading, para } = props;

  return (
    <div data-aos="fade-up">
      <Navbar />
      <div className="bg-[#121624] h-[30rem] flex flex-col justify-center items-center gap-4 pt-20">
        <h1
          data-aos="fade-up"
          className="text-4xl sm:m-0 pt-12 sm:p-0 sm:text-4xl xs:text-3xl px-8 font-bold flex flex-wrap text-white"
        >
          {heading}
        </h1>
        <p
          data-aos="fade-up"
          className={`w-[50%] sm:w-[70%] xs:w-[90%] text-center p-4 text-gray-200 text-sm sm:text-base xs:text-sm overflow-scroll ${para ? "": "hidden"}`}
        >
          {para}
        </p>
      </div>
      {/* <svg
        className="fill-[#121624]"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg> */}
    </div>
  );
};

export default HeaderForPages;
