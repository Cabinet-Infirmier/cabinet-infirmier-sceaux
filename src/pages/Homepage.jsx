import Hero from "../components/hero/Hero";
import MainInfo from "../components/squareInfo/Squareinfo";
import NurseTeam from "../components/nurse-team/NurseTeam";
import Disclaimer from "../components/disclaimer/Disclaimer";
import ServiceArea from "../components/serviceArea/ServiceArea";
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
      <div
        className="elfsight-app-af76246d-4231-4286-98b7-9059b32644d6"
        data-elfsight-app-lazy
      ></div>
      <Disclaimer />
    </>
  );
}

export default Homepage;
