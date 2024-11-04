import MobHero from "../assets/images/cloudGate.jpg";
import Arrow from "../assets/images/arrow.png";
import title from "../assets/images/TitleSponsor.png";
import unite from "../assets/images/uniteLogo.png";
import Logo from "./Logo";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Banner = () => {
  return (
    <section className="my-12 font-poppins">
      <img
        src={MobHero}
        alt="banner_Image"
        className=" w-full my-5 block object-cover h-auto md:hidden"
      />
      <div className="flex gap-[2%] flex-col lg:flex-row justify-between items-center flex-wrap">
        <div className="left-content text-center w-full lg:w-[38%]">
          <div className="mb-6">
            <Logo></Logo>
          </div>
          {/* title */}
          <div>
            <div className=" bg-chevron md:w-2/4 mx-auto h-[9vh] bg-no-repeat bg-contain mb-2">
              <img src={title} alt="" />
              {/* <h2 className="absolute  md:left-[28%] left-[34%] md:top-1 top-3 font-poppins tracking-wide">
                TITTLE SPONSOR
              </h2> */}
            </div>
          </div>
          <div className=" md:w-2/4 mx-auto mb-3">
            <img src={unite} alt="" className="object-cover" />
            {/* <h1 className="relative md:text-9xl text-5xl  font-bold mb-6">
              un
              <span className="md:text-8xl text-4xl">I</span>
              te
            </h1>
            <p className="text-right text-[10px] absolute bottom-0 right-28 font-semibold">
              THE SUMMIT FOR RETAIL AND CONSUMER BRANDS
            </p>
            <div className="absolute top-0 md:left-28 left-48">
              <div className="relative  flex justify-between">
                <h2 className="text-3xl">
                  analytics
                  <span className="flex font-extrabold text-3xl ms-2 -rotate-180 absolute left-[96%] bottom-[10%]">
                    <span className="bg-[#FF8D08] w-5 h-7 rotate-180 -   rounded-full"></span>
                    <span className="bg-[#5DDCFF] w-5 h-10 rotate-180 -ms-1 rounded-full"></span>
                    <span className="bg-[#F120FB] w-4 h-4 rotate-90 -ms-1 rounded-full"></span>
                  </span>
                </h2>
              </div>
            </div> */}
          </div>
          <div className="md:w-2/3 bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 mx-auto py-6 ps-8 md:ps-20 text-base font-semibold md:rounded-t-xl rounded-xl">
            <div className="flex items-center">
              <FaLocationDot />
              <h3 className="ms-7">The Dark , Chicago</h3>
            </div>
            <div className="flex mt-5 items-center ">
              <FaCalendarAlt />
              <h3 className="ms-7 ">3-5th May 2023</h3>
            </div>
          </div>
        </div>
        <div className="right-img hidden lg:flex  w-[60%] h-[60vh] bg-banner bg-no-repeat bg-cover bg-center">
          <div className="content text-center lg:w-1/2 mx-auto mt-20">
            <p className="text-base font-bold uppercase text-white mb-4 tracking-[3.5px]">
              get an invite to our exclusive
            </p>
            <div className="bg-white uppercase p-10 tracking-widest">
              <p className="text-md font-medium">analytics unite</p>
              <h2 className="text-5xl font-bold mb-4">Dinner</h2>
              <div className="bg-black w-2/3 mx-auto py-2 text-white ">
                <p className="text-sm">
                  may 4th, 2024 <br />
                  6:30 PM onwards
                </p>
              </div>
            </div>
            <img
              src={Arrow}
              alt="banner_Image"
              className=" w-12 mx-auto my-3 block object-cover h-auto"
            />
          </div>
        </div>
      </div>
      {/* <p className="w-1/4 bg-gradient-to-r from-yellow-50 via-pink-200 to-blue-50"></p> */}
    </section>
  );
};

export default Banner;
