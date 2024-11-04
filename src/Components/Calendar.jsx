import img1 from "../assets/images/imgLink1.png";
import img2 from "../assets/images/imgLink2.png";
import { FaPlus } from "react-icons/fa6";

const Calendar = () => {
  return (
    <div className="">
      <section className="py-14 md:pe-1  bg-[linear-gradient(90deg,_rgba(227,226,238,1)_0%,_rgba(252,214,209,1)_51%,_rgba(254,238,206,1)_100%)] rounded-xl">
        <div className="flex items-center justify-between flex-wrap w-full">
          <div className="left md:w-[38%] ps-14 text-left">
            <h3 className="hidden lg:block font-shadow font-bold tracking-widest text-3xl">
              JOIN US FOR THE SESSION
            </h3>
            <div className="border border-black text-center mt-3 mb-3 md:w-2/4 rounded-lg">
              <p className="py-2 px-7 text-xl font-bold tracking-widest bg-[#000] text-white rounded-t-lg">
                MAY
              </p>
              <p className="p-7 py-2 text-8xl font-extrabold">4</p>
            </div>
            <p className="text-lg font-medium">Grand Ballroom</p>
            <p className="text-lg font-bold">10:05-10:45 AM</p>
          </div>
          <div className="right rounded-xl shadow-xl bg-white text-center md:w-[48%] flex px-5 py-10 justify-center">
            <div className="img1">
              <img src={img1} alt="img" className="w-20 h-20 mx-auto" />
              <h2 className="mt-2 text-lg font-medium">Claire Wyatt</h2>
              <p className="md:px-10 text-base font-medium">
                Vice President, Business Strategy & Marketing Science Albertsons
                Media Collective
              </p>
            </div>
            <div className="img2">
              <img src={img2} alt="img" className="w-20 h-20 mx-auto" />
              <h2 className="mt-2 text-lg font-medium">Sangeetha Chandru</h2>
              <p className="px-10 text-base font-medium">
                Chief Practice Officer, Retail Fractal
              </p>
            </div>
          </div>
          <div className="content px-2 md:px-12 py-10 order-1 md:order-3">
            <h3 className="block lg:hidden font-shadow font-bold tracking-widest text-3xl">
              SPEAKER SPOTLIGHT
            </h3>
            <h2 className="text-3xl font-extrabold mb-3">
              A LABOUR OF LOVE : <br />
              <span className="text-xl md:text-2xl font-bold">
                Building Advanced Analytics Capabilities for Retail Media
                Networks
              </span>
            </h2>
            <p className="text-base font-medium">
              Retail Media Networks are everywhere these days and have
              transformed how many brands do business. The evolution of retail
              media is offering brands opportunities to connect with customers
              across digital channels like never before and offers more
              effective integrations with omnichannel first-party data. In this
              keynote, join Albertsons Media Collective and Fractal as they
              explore the world of RMNs; dive deep into the advanced measurement
              and analytic capabilities these networks offer, including why
              iROAS really matters vs. traditional ROAS; and share tips on how
              to find the right network for your brand.
            </p>
          </div>
        </div>
        <div className="text-sm text-black flex float-end mr-5 cursor-pointer p-4 rounded-full bg-yellow-300">
          <FaPlus />
        </div>
      </section>
    </div>
  );
};

export default Calendar;
