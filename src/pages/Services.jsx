import NursingCare from "../components/nursingCare/NursingCare.jsx";
import HomeCare from "../components/home-care/HomeCare.jsx";
import TreatmentManagement from "../components/treatment-management/TreatmentManagement.jsx";
import Vaccination from "../components/vaccination/Vaccination.jsx";
import Bandage from "../components/bandage/Bandage.jsx";
import MedicalRecord from "../components/medical-record/MedicalRecord.jsx";
import PatientCharter from "../components/patient-charter/PatientCharter.jsx";
import Note from "../components/note/Note.jsx";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      // Scroll logic with a slight delay to ensure content is loaded
      setTimeout(() => {
        const targetElement = document.getElementById(
          location.hash.substring(1)
        );
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Delay ensures the element is rendered before scrolling
    }
  }, [location]);

  return (
    <div className="flex justify-center flex-col items-center max-w-[100vw] m-5">
      <NursingCare />
      <HomeCare />
      <TreatmentManagement />
      <Vaccination />
      <Bandage />
      <MedicalRecord />
      <PatientCharter />
      <Note />
    </div>
  );
}
