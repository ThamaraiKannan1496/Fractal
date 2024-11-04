import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const SwiperSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="py-10 w-[83%] font-poppins">
        <h1 className="text-3xl font-bold md:text-5xl text-center mb-12">
          Accelators
        </h1>
        <Swiper
          // slidesPerView={4}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="text-center"
          spaceBetween={30}
        >
          <SwiperSlide className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-[#474C57] ">
              Concordia
            </h2>
            <p className="text-base mb-7">
              Concordia is an AI and Ma chine Learning data mapping and
              harmonization platform that enables faster & automated data
              integration from multiple sources. It allows data sets to converse
              with each-other for accelerated data-to-decision transformation.
            </p>
            <a
              href="#"
              className="py-2 px-6 inline-block mb-5 border-yellow-500 border border-yellow-500 text-yellow-500 font-medium rounded-full"
            >
              Learn More
              <span className="ms-3">{`>`}</span>
            </a>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h2 className="text-2xl font-bold mb-3 text-[#474C57]">
              Caliper.AI
            </h2>
            <p className="text-base mb-7">
              Caliper.AI is the Fractal Revenue growth management platform that
              will drive smarter pricing, trade promotion intelligence, a
              holistic price pack architecture strategy and incentive programs
              to drive better trade terms management
            </p>
            <a
              href="#"
              className=" py-2 px-6 inline-block mb-5 border-yellow-500 border border-yellow-500 text-yellow-500 font-medium rounded-full"
            >
              Learn More
              <span className="ms-3">{`>`}</span>
            </a>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 ">
            <h2 className="text-2xl font-bold mb-3 text-[#474C57]">
              Consumer hub
            </h2>
            <p className="text-base mb-7">
              ConsumerHub is a strategic analytics partner to Fortune 100
              companies helping smart decision-making using AI & analytics
              {` It's  `}a platform that powers consumer-centric businesses by
              transforming insight generation, activation, and commercialization
            </p>
            <a
              href="#"
              className=" py-2 px-6 inline-block mb-5 border-yellow-500 border border-yellow-500 text-yellow-500 font-medium rounded-full"
            >
              Learn More
              <span className="ms-3">{`>`}</span>
            </a>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h2 className="text-2xl font-bold mb-3 text-[#474C57]">
              Concordia
            </h2>
            <p className="text-base mb-7">
              Concordia is an AI and Ma chine Learning data mapping and
              harmonization platform that enables faster & automated data
              integration from multiple sources. It allows data sets to converse
              with each-other for accelerated data-to-decision transformation.
            </p>
            <a
              href="#"
              className="py-2 px-6 inline-block mb-5 border-yellow-500 border border-yellow-500 text-yellow-500 font-medium rounded-full"
            >
              Learn More
              <span className="ms-3">{`>`}</span>
            </a>
          </SwiperSlide>

          <div className="flex items-center justify-center gap-5 mt-5 mb-5">
            <div
              ref={prevRef}
              className="text-3xl !swiper-button-prev !text-black cursor-pointer p-3  rounded-full bg-yellow-300"
            >
              <FaArrowLeft />
            </div>
            <div
              ref={nextRef}
              className="!swiper-button-next text-3xl !text-black cursor-pointer p-3  rounded-full bg-yellow-300"
            >
              <FaArrowRight />
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperSection;
