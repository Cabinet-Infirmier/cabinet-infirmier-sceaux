import styles from "./UsefulInfo.module.css";

const icons = [
  { img: "calendar-icon.svg", fileName: "Icon de calendrier" },
  { img: "money-icon.svg", fileName: "Icon de paiement" },
];

function UsefulInfo() {
  return (
    <section className="flex flex-wrap justify-around text-center">
      <div className="flex flex-col items-center justify-center my-8">
        <img
          src={`./images/icons/${icons[0].img}`}
          alt={icons[0].fileName}
          className="w-[60px] h-auto"
        />
        <h4 className="mt-2">Disponibles 7 jours sur 7.</h4>
        <h4 className="leading-[25px]">
          Vous pouvez nous contacter par téléphone et SMS tous les jours de
          l’année.
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <img
          src={`./images/icons/${icons[1].img}`}
          alt={icons[1].fileName}
          className="w-[60px] h-auto"
        />
        <h4 className="mt-2">PAIEMENTS ACCEPTÉS</h4>
        <h4>Disponibles 7 jours sur 7.</h4>
        <h4 className="leading-[25px]">Espèces</h4>
        <h4 className="leading-[25px]">Chèque</h4>
      </div>
    </section>
  );
}

export default UsefulInfo;
