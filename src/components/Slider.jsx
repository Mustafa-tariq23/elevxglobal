import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderForHomePage = () => {
  // function Arrows({ className, style, onClick }) {
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "black",
  //         color: "white",
  //         borderRadius: "50%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    accessibility: true,
    // nextArrow: <Arrows />,
    // prevArrow: <Arrows />,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade" className="my-auto px-2" draggable="false">
      <div className="mt-20 bg-[#111827] rounded-lg w-full">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full text-black rounded-xl">
                  <div className="h-56 rounded-xl flex justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-40 w-40 rounded-full"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `All Pro Estimates`,
    img: `./images/forSlider/all-pro.png`,
    url: `https://allproestimates.com/`,
  },
  {
    name: `BTMEC`,
    img: `./images/forSlider/btmec.png`,
    url: `https://www.btmec.com.au/`,
  },
  {
    name: `Damas Travels`,
    img: `./images/forSlider/damas.png`,
    url: `https://www.damastravels.com/`,
  },
  {
    name: `Discount Digital Solution`,
    img: `./images/forSlider/Discount.png`,
    url: `https://discountdigitalsolution.com/`,
  },
  {
    name: `Apexeon Venture LLC`,
    img: `./images/forSlider/apexeon.png`,
    url: `https://apexeonventures.com/`,
  },
  {
    name: `UMP Corporation`,
    img: `./images/forSlider/ump.png`,
    url: `https://umpcorporation.com/`,
  },
  {
    name: `Real Estate PRO`,
    img: `./images/forSlider/RE-pro.png`,
    url: `https://prore.us/`,
  },
];

export default SliderForHomePage;
