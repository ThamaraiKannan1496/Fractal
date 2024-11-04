import { FaArrowRight } from "react-icons/fa";
const EventForm = () => {
  return (
    <div className="py-20 bg-[#F8F8F8] font-poppins">
      <section className="flex flex-col md:flex-row justify-between  gap-[2%]">
        <div className="py-12  rounded-xl left w-10% bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 text-center">
          <p className="font-semibold px-20 text-lg mb-4  ">
            Join us for an unforgettable evening of stimulating conversations!
          </p>
          <h4 className="text-lg font-medium tracking-widest">
            INVITATION ONLY
          </h4>
          <h2 className="text-5xl font-inter font-extrabold mb-5 tracking-widest">
            DINNER
          </h2>
          <p className="p-3 bg-black text-white mx-10 md:mx-32 tracking-widest">
            MAY 4TH , 2023 <br />
            6:30 PM ONWARD
          </p>
        </div>
        <div className="formside w-[88%] ">
          <p className="text-lg mb-5">
            If you have not yet received an invitation, indicate your interest
            by signing up below. Due to the limited number of seats available,
            we cannot guarantee attendance. However, we will make every effort
            to reserve a seat for you.
          </p>
          <form
            action=""
            className="flex flex-col md:flex-row flex-wrap gap-[2%] gap-y-3"
          >
            <div className="w-full md:w-[48%] ">
              <input
                type="text"
                className="outline-none  py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="First Name*"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <input
                type="text"
                className="outline-none py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="Last Name*"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <input
                type="email"
                className="outline-none py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="Work Email*"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <input
                type="text"
                className="outline-none py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="Company*"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <input
                type="text"
                className="outline-none py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="Phone"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <input
                type="text"
                className="outline-none py-2 w-full bg-transparent border-black border-b-2 placeholder-gray-800"
                placeholder="Designation"
              />
            </div>
            <p className="w-full">
              *By submitting this form you are acknowledging that you have read
              and agree to our <a href="">privacy statement. </a>
            </p>
            <button className="text-right w-full text-2xl font-medium flex items-center justify-end">
              Submit
              <span className="bg-[#FCD300] inline-block py-3 items-center px-3 ms-3 text-center  text-xl font-extrabold rounded-full">
                <FaArrowRight />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EventForm;
