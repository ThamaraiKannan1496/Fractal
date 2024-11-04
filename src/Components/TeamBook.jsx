import { IoMdTime } from "react-icons/io";
const TeamBook = () => {
  return (
    <section className="my-10 ">
      <div className="flex px-16 py-8 gap-4 flex-col md:flex-row text-center rounded-xl bg-[linear-gradient(90deg,_rgba(227,226,238,1)_0%,_rgba(252,214,209,1)_51%,_rgba(254,238,206,1)_100%)] font-poppins items-center justify-between">
        <h3 className="text-3xl font-bold">
          <span className="md:block hidden">Meet us at the Fractal Booth</span>
          <span className="md:hidden">Get in Touch</span>
        </h3>
        <button className="flex md:flex hidden items-center gap-4 bg-transparent py-3 px-6 border-black border rounded-3xl">
          <IoMdTime /> Book a Demo
        </button>
      </div>
    </section>
  );
};

export default TeamBook;
