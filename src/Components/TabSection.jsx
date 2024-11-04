import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [accStates, setAccStates] = useState({
    0: { 0: true },
    1: { 0: true },
  });

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const toggleAccordion = (tabIndex, panelIndex) => {
    setAccStates((prevStates) => ({
      ...prevStates,
      [tabIndex]: {
        ...prevStates[tabIndex],
        [panelIndex]: !prevStates[tabIndex]?.[panelIndex],
      },
    }));
  };
  const tabs = [
    {
      label: "Retail",
      panels: [
        {
          title: "Retail Media Networks",
          content:
            "Through Retail Media Networks 360, Fractal’s team of retail industry experts help retailers build and operate a more real-time and AI-powered platform to effectively monetize digital channels. It is built on strong data foundation principles and drives engagement and revenue from advertisers by offering a platform that is self-service, offers more targeted audience segmentation and selection, campaign performance, reporting, and advanced measurement techniques to measure potential campaign uplift. This solution has had a very positive impact with our clients, driving significant growth in revenues.",
        },
        {
          title: "Inventory Optimization",
          content: "Inventory Optimization",
        },
        {
          title: "Demand Forecasting",
          content: "Demand Forecasting",
        },
        {
          title: "Supply Chain Control Tower",
          content: "Supply Chain Control Tower",
        },
        {
          title: "Promotion Optimization",
          content: "Promotion Optimization",
        },
        {
          title: "ESG",
          content: "ESG",
        },
      ],
    },
    {
      label: "CPG",
      panels: [
        { title: "CPG", content: "CPG" },
        { title: "CPG2", content: "CPG2" },
      ],
    },
  ];

  return (
    <section className="py-10">
      <h1 className="py-5 text-center text-3xl md:text-5xl font-bold">
        Our Capabilities
      </h1>
      <div className="w-full rounded-xl mx-auto my-10 ">
        <div className="flex">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => handleTabChange(index)}
              className={`px-4 py-2 cursor-pointer text-lg font-medium bg-none ${
                activeTab === index ? "bg-yellow-100" : "text-white-500"
              } text-center rounded-t-lg focus:outline-none
              
              `}
            >
              {tab.label}
            </span>
          ))}
        </div>

        <div className="bg-[#FBEEEE]">
          {tabs[activeTab].panels.map((panel, panelIndex) => (
            <div key={panelIndex} className="mb-4 border-b px-10">
              <button
                className="flex justify-between w-full py-2 text-left font-medium text-gray-700"
                onClick={() => toggleAccordion(activeTab, panelIndex)}
              >
                {panel.title}
                <span className="text-3xl">
                  {accStates[activeTab]?.[panelIndex] ? "-" : "+"}
                </span>
              </button>
              {accStates[activeTab]?.[panelIndex] && (
                <div className=" text-gray-600 md:pe-16">{panel.content}</div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="flex items-center text-xl ps-10 py-5 bg-[#FBEEEE]"
          >
            Download Placemats
            <div className="!swiper-button-next text-lg cursor-pointer p-2 ms-3 rounded-full bg-yellow-300">
              <FaArrowRight />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
