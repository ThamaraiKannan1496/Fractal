import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Banner from "./Components/Banner";
import EventHeading from "./Components/EventHeading";
import EventForm from "./Components/EventForm";
import TeamBook from "./Components/TeamBook";
import ShadowText from "./Components/ShadowText";
import Team from "./Components/Team";
import SwiperSection from "./Components/SwiperSection";
import FooterLinks from "./Components/FooterLinks";
import Calendar from "./Components/Calendar";
import TabSection from "./Components/TabSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <EventHeading></EventHeading>
      <EventForm></EventForm>
      <TabSection />
      <SwiperSection></SwiperSection>
      <Calendar />
      <Team></Team>
      <TeamBook />
      <ShadowText />
      <FooterLinks />
      <Footer></Footer>
    </>
  );
}

export default App;
