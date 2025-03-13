import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import ServiceTitle from "../serviceTitle/ServiceTitle";

function HomeCare() {
  const homeCareArray = [
    "Dans le cadre d’une situation de dépendance temporaire ou permanente BSI",
    "Le rôle de l’infirmière dans le maintien des personnes dépendantes à domicile est crucial et multidimensionnel. Notre objectif principal est de garantir la sécurité de chaque patient tout en leur permettant de vivre chez eux, dans un environnement familier, le plus longtemps possible. Nous évaluons les besoins de la personne dépendante en matière de soins, d’hygiène, de nutrition, de mobilité et de sécurité. Cette évaluation permet de mettre en place un plan de soins personnalisé.",
    "",
    "L’infirmiere prodigue des soins tels que la surveillance des constantes, la prise du traitement, pansements, bandes ou bas de contention, prise des compléments alimentaire, et la surveillance de l’apparition d’ œdèmes. Elle met en œuvre des mesures préventives pour éviter les complications liées à l’immobilité, comme les escarres, les infections, les troubles circulatoires et les chutes.",
    "",
    "Nous accompagnons nos patients dans leur quotidien, en favorisant leur autonomie et en veillant à leur confort. De plus, elle conseille les proches et les aidants sur les soins à prodiguer et coordonne avec d’autres professionnels de santé si nécessaire, permettant ainsi un maintien à domicile en toute sécurité.",
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
    <div className="max-w-[1048px] mt-[5em]" id="home-care">
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
          title="Soins à domicile pour patients dépendants"
          icon="home-care"
        >
          <h4 className="text-lg text-left">
            Prise en charge CPAM sur ordonnance
          </h4>
        </ServiceTitle>
      </motion.div>

      <div>
        {homeCareArray.map((item) => (
          <p className="text-[18px] mt-[2em] text-center" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div>
        <p className="p-5 mt-5 text-[18px] text-white font-semibold rounded-3xl text-center bg-[#D1A7A7]">
          Notre objectif est de permettre le maintient à domicile en proposant
          une prise en charge globale du patient.
        </p>
        <p className="text-center text-[18px] mt-2">
          Nous ne réalisons pas de soins d&apos;hygiène mais nous pouvons vous
          mettre en relation avec des Auxillaires de vie, associations.
        </p>
      </div>
    </div>
  );
}

export default HomeCare;
