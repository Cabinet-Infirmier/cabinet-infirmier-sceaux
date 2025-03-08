import NursingCare from "../components/nursingCare/NursingCare.jsx";
import HomeCare from "../components/home-care/HomeCare.jsx";
import TreatmentManagement from "../components/treatment-management/TreatmentManagement.jsx";
import Vaccination from "../components/vaccination/Vaccination.jsx";
import Bandage from "../components/bandage/bandage.jsx";
import MedicalRecord from "../components/medical-record/MedicalRecord.jsx";
import PatientCharter from "../components/patient-charter/PatientCharter.jsx";
import Note from "../components/note/Note.jsx";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
