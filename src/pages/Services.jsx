import styles from "./Services.module.css";
import Button from "../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import ServiceTitle from "../components/serviceTitle/ServiceTitle.jsx";
import Service_1 from "../../public/images/service-1.jpg";
import Service_2 from "../../public/images/service-2.jpg";
import Service_3 from "../../public/images/service-3.jpg";
import Service_4 from "../../public/images/service-4.jpg";
import { Cross } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <h2 className="text-lg text-stone-600">LES SOINS INFIRMIERS</h2>
      <Button onClick={() => navigate("/contact")}>Prendre RDV</Button>
      <div>
        <div className={styles.serviceContainer_1}>
          <ServiceTitle title="Soins Infirmiers" icon="icon-nurse">
            <h4>Prise en charge CPAM sur ordonnance</h4>
          </ServiceTitle>
          <div className={styles.serviceContainerImage}>
            <div>
              <CrossList>
                Pansements plaies, ulcères, escarres, greffe, amputation,
                brulure, nécessitant une irrigation ou un méchage.
              </CrossList>
              <CrossList>
                Soins post opératoires (ablation fils et agrafes, pansements,
                surveillance).
              </CrossList>
              <CrossList>Injections Intra musculaire.</CrossList>
              <CrossList>Injections sous cutané.</CrossList>
              <CrossList>
                Perfusions, injections intraveineuses périphériques et
                centrales.
              </CrossList>
              <CrossList>Soins de PAC, débranchement chimiothérapie.</CrossList>
              <CrossList>
                Prise en charge patients diabétique (contrôle de la glycémie,
                injection insuCrossListne, éducation).
              </CrossList>
              <CrossList>Vaccins.</CrossList>
              <CrossList>Pose et ablation de sonde urinaire.</CrossList>
            </div>
            <div className={styles.serviceImage}>
              <img src={Service_1} alt="Image de service infirmière" />
            </div>
          </div>
        </div>

        <div className={styles.serviceContainer_2}>
          <ServiceTitle
            title="Soins à domicile pour patients dépendants"
            icon="icon-soins"
          >
            <h4>Prise en charge CPAM sur ordonnance</h4>
          </ServiceTitle>
          <div className={styles.containerText}>
            <h2>
              Dans le cadre d’une situation de dépendance temporaire ou
              permanente BSI
            </h2>
            <p>
              Le rôle de l’infirmière dans le maintien des personnes dépendantes
              à domicile est crucial et multidimensionnel. Notre objectif
              principal est de garantir la sécurité de chaque patient tout en
              leur permettant de vivre chez eux, dans un environnement familier,
              le plus longtemps possible. Nous évaluons les besoins de la
              personne dépendante en matière de soins, d’hygiène, de nutrition,
              de mobilité et de sécurité. Cette évaluation permet de mettre en
              place un plan de soins personnalisé.
              <br />
              L’infirmiere prodigue des soins tels que la surveillance des
              constantes, la prise du traitement, pansements, bandes ou bas de
              contention, prise des compléments alimentaire, et la surveillance
              de l’apparition d’ œdèmes. Elle met en œuvre des mesures
              préventives pour éviter les complications liées à l’immobilité,
              comme les escarres, les infections, les troubles circulatoires et
              les chutes. <br />
              Nous accompagnons nos patients dans leur quotidien, en favorisant
              leur autonomie et en veillant à leur confort. De plus, elle
              conseille les proches et les aidants sur les soins à prodiguer et
              coordonne avec d’autres professionnels de santé si nécessaire,
              permettant ainsi un maintien à domicile en toute sécurité.
            </p>
            <div className={styles.pinkBanner}>
              <p>
                Notre objectif est de permettre le maintient à domicile en
                proposant une prise en charge globale du patient.
              </p>
            </div>
            <p>
              <b>
                Nous ne réalisons pas de soins d&apos;hygiène mais nous pouvons
                vous mettre en relation avec des Auxillaires de vie,
                associations.
              </b>
            </p>
          </div>
        </div>
        <div>
          <ServiceTitle
            title="Gestion des traitements"
            icon="icon-treatment"
          ></ServiceTitle>
          <div className={styles.containerText}>
            <p>
              L’infirmière vérifie la validité et la clarté des prescriptions
              médicales. Elle surveille les signes d’efficacité des traitements,
              mais aussi les effets secondaires et les réactions indésirables.{" "}
              <br />
              L’infirmière gère les stocks de médicaments, en vérifiant les
              dates de péremption, les quantités disponibles et informe lorsque
              les médicaments ou ordonnance sont à renouveler. Nous collaborons
              étroitement avec les médecins, les pharmaciens et les autres
              professionnels de santé.
            </p>
          </div>
        </div>
        <div className={styles.serviceContainer_3_4}>
          <ServiceTitle title="Vaccination" icon="icon-vaccin"></ServiceTitle>
          <div className={styles.serviceContainerImage}>
            <div>
              <p>
                L’infirmière joue un rôle essentiel dans la mise en œuvre des
                programmes de vaccination, contribuant ainsi à la santé publique
                et à la prévention des maladies.
                <br /> Nous vaccinons sur prescription médicale, sauf dans le
                cadre des campagnes anti grippale et anti- covid.
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img src={Service_2} alt="Image de vaccin" />
            </div>
          </div>
        </div>
        <div className={styles.serviceContainer_3_4}>
          <ServiceTitle title="Pansements" icon="icon-pansement"></ServiceTitle>
          <div className={styles.serviceContainerImage}>
            <div>
              <p>
                Les infirmières sont formées pour effectuer des pansements selon
                les protocoles recommandés par l’ARS. Leur rôle est d’évaluer
                l’état de la plaie, surveiller les signes d’infection, de
                nécrose ou autres complications. Cela permet d’ajuster les soins
                en fonction son l’évolution. Nous sommes formées pour choisir le
                type de pansement le plus adapté en fonction de l’etat de
                cicatrisation et de la localisation. Elles rassurent et aide le
                patient à gérer l’anxiété lié aux soins
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img src={Service_3} alt="Image de pansement" />
            </div>
          </div>
        </div>
        <div>
          <ServiceTitle
            title="Dossiers de Soins"
            icon="icon-dossier"
          ></ServiceTitle>
          <div className={styles.containerText}>
            <p>
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
        <div>
          <ServiceTitle
            title="Charte du patient"
            icon="icon-patient"
          ></ServiceTitle>
          <h2>Droits du patient</h2>
        </div>
        <div className={styles.pinkBanner}>
          <p>
            La charte du patient est un outil essentiel pour promouvoir une
            relation de confiance et de respect mutuel entre les patients et les
            professionnels de santé. Elle contribue à améliorer la qualité des
            soins et à garantir le respect des droits fondamentaux des patients.
          </p>
        </div>
      </div>
      <div>
        <h3>A SAVOIR</h3>
        <div className={styles.serviceContainerImage}>
          <div>
            <CrossList>
              Certains soins ne sont pas pris en charge par la CPAM (prise de la
              tension, bandes ou bas de contention non accompagnée d’un
              pansement d’ulcère ou greffe cutanée…) s’ils ne rentrent pas dans
              le cadre d’une personne dépendante (BSI)
            </CrossList>
            <CrossList>
              Avant le premier rendez-vous avec l’infirmière, pensez à récupérer
              le matériel nécessaire en pharmacie prescrit par votre médecin.
            </CrossList>
            <CrossList>
              L’infirmière est habilité à prescrire du matériel nécessaire pour
              la suite de vos soins (conformément à l’article du 20 mars 2018)
            </CrossList>
          </div>
          <div className={styles.serviceImage}>
            <img src={Service_4} alt="Image de service infirmière" />
          </div>
        </div>
        <Button onClick={() => navigate("/contact")}>Prendre RDV</Button>
      </div>
    </div>
  );
}

function CrossList({ children }) {
  return (
    <div style={{ margin: ".5rem" }}>
      <Cross color="#d1a7a7" />
      <span style={{ marginLeft: "1.5rem" }}>{children}</span>
    </div>
  );
}
