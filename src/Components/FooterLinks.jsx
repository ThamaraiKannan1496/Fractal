import Logo from "./Logo";
import { FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const FooterLinks = () => {
  return (
    <>
      <section className="py-10">
        <div className="flex items-center justify-between flex-col md:flex-row flex-wrap gap-[2%] gap-y-5">
          <div className="md:w-[30%] order-2 md:order-1">
            <Logo />
          </div>
          <div className="py-5 px-10 bg-[#F7FBFF] font-poppins text-center md:w-[35%] order-1 md:order-2">
            <h3 className="font-semibold text-xl">Subscribe to our Magazine</h3>
            <p className=" text-sm px-3 mt-3">
              {` By "subscribing" you consent to allow Fractal to store and process
              your information as per our privacy policy
                
                `}
            </p>
            <div className="subscribe relative my-5 ">
              <input
                type="text"
                className="md:w-3/4 py-3 ps-5 bg-[#babfc4] placeholder-gray-600 rounded-full"
                placeholder="Your email address"
              />
              <div className="text-sm !text-black inline-block absolute top-1 md:right-14 right-1 cursor-pointer p-3  rounded-full bg-yellow-300">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="font-poppins md:w-[30%] order-3 md:order-3">
            <div className="flex justify-center items-center gap-5 text-base hover:cursor-pointer ">
              <span className="p-3 border border-black rounded-full hover:text-blue-50 hover:bg-black transition duration-300 ease-in">
                <FaXTwitter className="" />
              </span>
              <span className="border border-black rounded-full p-3 hover:text-blue-50 hover:bg-black transition duration-300 ease-in">
                <FaInstagram />
              </span>
              <span className="border border-black rounded-full p-3 hover:text-blue-50 hover:bg-black transition duration-300 ease-in">
                {" "}
                <FaFacebookF />
              </span>
              <span className="border border-black rounded-full p-3 hover:text-blue-50 hover:bg-black transition duration-300 ease-in">
                {" "}
                <FaLinkedinIn />
              </span>
              <span className="border border-black rounded-full p-3 hover:text-blue-50 hover:bg-black transition duration-300 ease-in">
                <FaYoutube />
              </span>
            </div>
            <p className="text-center mt-3">
              All rights reserved © 2022 Fractal Analytics Inc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
