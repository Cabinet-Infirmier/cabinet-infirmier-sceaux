import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import ServiceTitle from "../serviceTitle/ServiceTitle";

function Bandage() {
  const bandageArray = [
    "Les infirmières sont formées pour effectuer des pansements selon les protocoles recommandés par l’ARS.",
    "Leur rôle est d’évaluer l’état de la plaie, surveiller les signes d’infection, de nécrose ou autres complications.",
    "Cela permet d’ajuster les soins en fonction son l’évolution.",
    "Nous sommes formées pour choisir le type de pansement le plus adapté en fonction de l’etat de cicatrisation et de la localisation.",
    "Elles rassurent et aide le patient à gérer l’anxiété lié aux soins",
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="max-w-[1048px] mt-20">
      <div className="mt-5">
        <div className="flex flex-col">
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
            <ServiceTitle title="Pansements" icon="injury-icon" />
          </motion.div>

          <div className="flex xl:flex-nowrap flex-wrap-reverse justify-center">
            <div>
              <div className="mt-5">
                {bandageArray.map((item) => (
                  <p className="text-[18px]" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <img
              className="w-60 h-60 mt-5 object-cover rounded-3xl"
              src="/images/service-3.jpg"
              alt="Vaccin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bandage;
