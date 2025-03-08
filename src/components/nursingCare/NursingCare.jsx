import Button from "../button/Button";
import NursingCareItem from "../nursing-care-item/NursingCareItem";
import ServiceTitle from "../serviceTitle/ServiceTitle";
import { useNavigate } from "react-router-dom";

function NursingCare() {
  const navigate = useNavigate();

  const nursingCareArray = [
    "Pansements plaies, ulcères, escarres, greffe, amputation, brulure, nécessitant une irrigation ou un méchage.",
    "Soins post opératoires (ablation fils et agrafes, pansements,surveillance).",
    "Injections Intra musculaire.",
    "Injections sous cutané.",
    "Perfusions, injections intraveineuses périphériques et centrales.",
    "Soins de PAC, débranchement chimiothérapie.",
    "Prise en charge patients diabétique (contrôle de la glycémie, injection insuNursingCareItemne, éducation).",
    "Vaccins.",
    "Pose et ablation de sonde urinaire.",
  ];

  return (
    <div className="max-w-[1048px]">
      <h2 className="mt-24 text-3xl font-semibold text-stone-700 text-center">
        LES SOINS INFIRMIERS
      </h2>
      <div className="flex justify-center mt-1">
        <Button onClick={() => navigate("/contact")}>Prendre RDV</Button>
      </div>
      <div>
        <ServiceTitle title="Soins Infirmiers" icon="icon-nurse">
          <h4 className="text-lg text-left">
            Prise en charge CPAM sur ordonnance
          </h4>
        </ServiceTitle>
        <div className="flex xl:flex-nowrap flex-wrap-reverse items-center justify-center">
          <div className="mt-5 ">
            {nursingCareArray.map((item) => (
              <NursingCareItem key={item}>{item}</NursingCareItem>
            ))}
          </div>

          <div className="flex">
            <img
              className="m-4 w-60 h-60 object-cover rounded-3xl"
              src="/images/service-1.jpg"
              alt="infirmière en service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NursingCare;
