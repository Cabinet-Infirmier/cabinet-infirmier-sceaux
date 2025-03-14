import Button from "../button/Button";
import { NavLink } from "react-router-dom";

export default function SquareInfo() {
  return (
    <div className="flex justify-center items-center my-20 mx-2">
      <div className="flex flex-col justify-center items-center text-center max-w-screen-xl min-w-[12rem] rounded-lg shadow-lg p-8">
        <h3 className="text-[#d78b8b] text-xl">A PROPOS DE NOUS</h3>
        <div className="text-[#575555] mb-5">
          <p className="leading-8 mt-4">
            Le cabinet se compose de 4 infirmières diplômées d&apos;état
            réparties en 2 tournées. Il se trouve au sein du centre santé sport
            Robinson, où exercent également 3 kinésithérapeutes et 1 pédicure
            podologue.
          </p>

          <strong className="leading-8 mt-4">
            Les infirmières vous proposent des soins au cabinet et à votre
            domicile sur rendez-vous. Nous pratiquons le tiers payant sécurité
            sociale et mutuelle (pas d&apos;avance de frais).
          </strong>
          <p className="leading-8 mt-4">
            Dans le cadre de la formation continue, nous effectuons
            régulièrement des formations afin de nous adapter aux nouvelles
            techniques, protocoles de soins et innovations.
          </p>
        </div>

        <NavLink to="/services">
          <Button className="mt-5">En savoir Plus</Button>
        </NavLink>
      </div>
    </div>
  );
}
