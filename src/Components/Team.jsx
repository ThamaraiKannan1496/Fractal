import cardImgOne from "../assets/images/Lavanya-1.png";
import cardImgTwo from "../assets/images/Lavanya.png";
import cardImgThree from "../assets/images/img1.png";
import cardImgFour from "../assets/images/Sharada.png";
import cardImgFive from "../assets/images/Satish.png";
import cardImgSix from "../assets/images/Sangeetha-2.png";
import cardImgSeven from "../assets/images/Maskgroup-6.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Team = () => {
  const teamMembers = [
    {
      name: "Sangeetha Chandru",
      image: cardImgSix,
      title: "Chief Practice Officer Retail- Advanced Analytics and AI",
      linkedIn: "#",
      email: "#",
      className: "bg-[#FFFBE5]",
    },
    {
      name: "Prithwish Dev",
      image: cardImgSeven,
      title: "Head of Sales Retail & CPG",
      linkedIn: "#",
      email: "#",
      className: "bg-[#EDF5FE]",
    },
    {
      name: "Saurabh Srivastava",
      image: cardImgFive,
      title: "Vice President | AI and Digital Transformation",
      linkedIn: "#",
      email: "#",
      className: "bg-[#FBEEEE]",
    },
    {
      name: "Abhishek Yadav",
      image: cardImgOne,
      title: "VP and Head of Retail & Distribution",
      linkedIn: "#",
      email: "#",
      className: "bg-[#EDF5FE]",
    },
    {
      name: "Arumugam Jayabalan",
      image: cardImgFour,
      title: "VP & Strategic Client Partner CPG",
      linkedIn: "#",
      email: "#",
      className: "bg-[#FFFBE5]",
    },
    {
      name: "Flara",
      image: cardImgThree,
      title: "Sr. Consultant Retail Strategy",
      linkedIn: "#",
      email: "#",
      className: "bg-[#FBEEEE]",
    },
    {
      name: "Cristina Alvarezogando",
      image: cardImgTwo,
      title: "Client Partner, Consulting CPG",
      linkedIn: "#",
      className: "bg-[#FFFBE5]",
      email: "#",
    },
  ];

  return (
    <>
      <section className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-semibold font-poppins mb-5">
          <span className="font-shadow tracking-[10px]">Meet our</span>
          <br />
          Team
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[1.5%] gap-y-4">
          {teamMembers.map((data, keyy) => (
            <div
              className=" mt-2 xl:w-[23.75%] md:w-[31.6%] text-left font-poppins"
              key={keyy}
            >
              <img
                src={data.image}
                alt="img"
                className="object-cover block w-full h-[37vh] rounded-t-xl"
              />
              <div
                className={`details px-5 py-3 ${data.className} rounded-b-xl`}
              >
                <h4 className="text-xl font-semibold mb-1 tracking-wide">
                  {data.name}
                </h4>
                <p className="text-base leading-6 mb-1">
                  Chief Practice Officer Retail- Advanced Analytics and AI
                </p>
                <div className="flex justify-start items-center text-3xl gap-2 py-3">
                  <a href="#">
                    <FaLinkedin className="text-[#0a66c2]" />
                  </a>
                  <a href="#">
                    <IoIosMail className="text-[#56687a]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
