import Navbar from "../Navbar";
import { Button } from "../ui/button";

const HeaderForCareer = (props) => {
  const { heading, para } = props;

  return (
    <div data-aos="fade-up">
      <Navbar />
      <div className="bg-[#121624] h-[30rem] flex flex-col justify-center items-center gap-4 pt-20">
        <h1
          data-aos="fade-up"
          className="text-4xl sm:m-0 sm:p-0 sm:text-4xl xs:text-3xl px-8 font-bold flex flex-wrap text-white"
        >
          {heading}
        </h1>
        <p
          data-aos="fade-up"
          className={`w-[50%] sm:w-[70%] xs:w-[90%] hidden sm:block text-center p-4 text-gray-200 text-lg sm:text-base xs:text-sm ${
            para ? "" : "hidden"
          }`}
        >
          {para}
        </p>
        <Button className="bg-white text-[#121624] hover:bg-gray-200 hover:text-[#4a5785] px-2 py-3 text-md h-auto">
          <a href="#job-openings">Current Openings</a>
        </Button>
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

export default HeaderForCareer;
