import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import NursingCareItem from "../nursing-care-item/NursingCareItem";
import ServiceTitle from "../serviceTitle/ServiceTitle";

function NursingCare() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const nursingCareArray = [
    "Pansements plaies, ulcères, escarres, greffe, amputation, brulure, nécessitant une irrigation ou un méchage.",
    "Soins post opératoires (ablation fils et agrafes, pansements,surveillance).",
    "Injections Intra musculaire.",
    "Injections sous cutané.",
    "Perfusions, injections intraveineuses périphériques et centrales.",
    "Soins de PAC, débranchement chimiothérapie.",
    "Prise en charge patients diabétique (contrôle de la glycémie, injection insuline, éducation).",
    "Vaccins.",
    "Pose et ablation de sonde urinaire.",
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="max-w-[1048px]" id="nurse-icon">
      <h2 className="mt-24 uppercase text-3xl font-semibold text-stone-700 text-center">
        Les soins infirmiers
      </h2>
      <div className="flex justify-center mt-1">
        <Button onClick={() => navigate("/contact")}>Nous Contacter</Button>
      </div>

      <div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <ServiceTitle title="Soins Infirmiers" icon="icon-nurse">
            <h4 className="text-lg text-left">
              Prise en charge CPAM sur ordonnance
            </h4>
          </ServiceTitle>
        </motion.div>

        <div className="flex xl:flex-nowrap flex-wrap-reverse items-center justify-center">
          <motiondiv className="mt-5 ">
            {nursingCareArray.map((item) => (
              <NursingCareItem key={item}>{item}</NursingCareItem>
            ))}
          </motiondiv>

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
