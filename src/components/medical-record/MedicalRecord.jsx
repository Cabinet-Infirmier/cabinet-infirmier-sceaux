import ServiceTitle from "../serviceTitle/ServiceTitle";

function MedicalRecord() {
  return (
    <div className="max-w-[1048px] mt-20">
      <ServiceTitle
        title="Dossiers de Soins"
        icon="icon-dossier"
      ></ServiceTitle>
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
