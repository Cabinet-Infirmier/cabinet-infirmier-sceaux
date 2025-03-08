import ServiceTitle from "../serviceTitle/ServiceTitle";

function TreatmentManagement() {
  return (
    <div className="max-w-[1048px] mt-20">
      <div>
        <ServiceTitle
          title="Gestion des traitements"
          icon="icon-treatment"
        ></ServiceTitle>
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
