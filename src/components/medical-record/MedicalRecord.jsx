import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import ServiceTitle from "../serviceTitle/ServiceTitle";

function MedicalRecord() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="max-w-[1048px] mt-20" id="medical-history-icon">
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
        {" "}
        <ServiceTitle title="Dossiers de Soins" icon="medical-history-icon" />
      </motion.div>

      <div className="mt-5">
        <p className="text-[18px]">
          Un dossier de soins infirmiers est un document essentiel dans le
          domaine de la santé, utilisé pour organiser et suivre les soins
          prodigués aux patients.
          <br />
          Il contient le détails des actes réalisées et des ordonnances pour
          assurer la continuité et la qualité des soins permettant une
          réévaluation régulière de son état de santé. Chaque patient à la
          possibilité de le consulter.
        </p>
      </div>
    </div>
  );
}

export default MedicalRecord;
