import Hero from "../components/hero/Hero";
import MainInfo from "../components/squareInfo/Squareinfo";
import NurseTeam from "../components/nurse-team/NurseTeam";
import Disclaimer from "../components/disclaimer/Disclaimer";
import ServiceArea from "../components/serviceArea//serviceArea";
import Services from "../components/services/Services";
import UsefulInfo from "../components/useful-info/UsefulInfo";

function Homepage() {
  return (
    <>
      <Hero />
      <MainInfo />
      <Services />
      <ServiceArea />
      <UsefulInfo />
      <NurseTeam />
      <Disclaimer />
    </>
  );
}

export default Homepage;
