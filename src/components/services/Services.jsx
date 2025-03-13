import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import Service from "../service/Service";
import styles from "./Services.module.css";
import Button from "../button/Button";

function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className={styles.services}>
      <h2>Nos services</h2>
      <div className={styles.container}>
        <div className={styles.firstRow}>
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <Service
              id="nurse-icon"
              name="Soins infirmiers"
              fileName="nurse-icon.svg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <Service
              id="home-care"
              name="Soins à domicile pour les patients dépendants"
              fileName="home-care.svg"
            />{" "}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Service
              id="icon-treatment"
              name="Gestion des traitements"
              fileName="icon-treatment.png"
            />
          </motion.div>
        </div>

        <div className={styles.secondRow}>
          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Service
              id="syringe-icon"
              name="Vaccination"
              fileName="syringe-icon.svg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Service
              id="injury-icon"
              name="Pansements"
              fileName="injury-icon.svg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Service
              id="medical-history-icon"
              name="Dossier de soins"
              fileName="medical-history-icon.svg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Service
              id="patient-charter"
              name="Charte du patient"
              fileName="patient-charter.svg"
            />
          </motion.div>
        </div>
        <Link to="/services">
          <Button>Voir les services</Button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
