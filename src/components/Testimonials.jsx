import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[750px] bg-[#2b282e] pt-14" id="Testimonials">
      <h1 className="text-white my-8 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center px-4">Look what our customers says about us!!</h1>
      <p className="mb-5 text-gray-300 text-lg flex text-center px-6">Swipe left or right to see more opinions  <FaArrowsAltH  className="mt-2 ml-2 text-blue-500"/> </p>
      <div className="max-w-[1640px]">
      <Swiper
        breakpoints={{
          370: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1000:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[18%] min-[500px]:max-w-[18%]   min-[639px]:max-w-[20%]   sm:max-w-[35%] md:max-w-[38%] lg:max-w-[61%]  xl:max-w-[71%] flex items-center justify-center"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <a href={item.href}><div className="hover:shadow-lg hover:shadow-gray-600 flex flex-col items-center  gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[430px] md:h-[460px] w-[290px] sm:w-[245px] lg:h-[450px] lg:w-[300px] xl:w-[370px] md:w-[290px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 " />
              <div className="relative flex flex-col gap-5 items-center text-center ">
                <img src={item.icon} className="text-blue-600 group-hover:text-blue-400 w-[95px] h-[95px] rounded-full" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <q className="lg:text-[18px] italic">{item.content} </q>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              <FaQuoteRight  className="absolute top-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500  duration-200"/>
            </div> </a>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;