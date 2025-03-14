import { Link } from "react-router-dom";
import Button from "../button/Button";
import Nurse from "../nurse/Nurse";

function NurseTeam() {
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h2 className="text-[#575555] uppercase text-xl font-bold mb-10">
        Infirmières au cabinet
      </h2>
      <ul className="flex justify-evenly w-full flex-wrap">
        <Nurse name="Eva THOMINOT," fileName="photo-eva.png" />
        <Nurse name="Sandrine SAINT-JOANNIS" fileName="photo-sandrine.png" />
        <Nurse name="Marion NOEL" fileName="photo-nurse.png" />
        <Nurse name="Pauline PELTRET" fileName="photo-nurse.png" />
      </ul>
    </section>
  );
}

export default NurseTeam;
