import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import ServiceTitle from "../serviceTitle/ServiceTitle";

function TreatmentManagement() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="max-w-[1048px] mt-20" id="icon-treatment">
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
          <ServiceTitle
            title="Gestion des traitements"
            icon="icon-treatment"
          ></ServiceTitle>
        </motion.div>

        <div className="mt-5">
          <p className="text-[18px]">
            L’infirmière vérifie la validité et la clarté des prescriptions
            médicales. Elle surveille les signes d’efficacité des traitements,
            mais aussi les effets secondaires et les réactions indésirables.{" "}
            <br />
            L’infirmière gère les stocks de médicaments, en vérifiant les dates
            de péremption, les quantités disponibles et informe lorsque les
            médicaments ou ordonnance sont à renouveler. Nous collaborons
            étroitement avec les médecins, les pharmaciens et les autres
            professionnels de santé.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TreatmentManagement;
