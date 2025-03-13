import { Link } from "react-router-dom";
import Button from "../button/Button";
import Nurse from "../nurse/Nurse";

function NurseTeam() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-[#575555] uppercase text-xl font-bold mb-5">
        Infirmières au cabinet
      </h2>
      <ul className="flex justify-evenly w-full flex-wrap">
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
      </ul>
    </section>
  );
}

export default NurseTeam;
