import ServiceTitle from "../serviceTitle/ServiceTitle";

function PatientCharter() {
  return (
    <div className="max-w-[1048px] mt-20">
      <div className="mt-5">
        <ServiceTitle
          title="Charte du patient"
          icon="icon-patient"
        ></ServiceTitle>
        <h2 className="text-lg text-[#575555] font-semibold text-center uppercase">
          Droits du patient
        </h2>
        <div className="text-[18px] mt-4 p-4 shadow-2xl rounded-3xl">
          <p>
            <span className="font-semibold text-[#D78B8B]">
              1. Droit à l&apos;information :{" "}
            </span>
            Le patient a le droit d&apos;être informé de manière claire et
            compréhensible sur son état de santé, les traitements proposés, les
            risques et les alternatives possibles.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              2. Droit au consentement :{" "}
            </span>
            Le patient doit donner son consentement libre et éclairé avant toute
            intervention médicale ou traitement. Il a le droit de refuser un
            traitement ou de demander son interruption.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              3. Droit au respect et à la dignité :{" "}
            </span>
            Le patient a le droit d&apos;être traité avec respect, dignité et
            courtoisie par tous les professionnels de santé.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              4. Droit à la confidentialité :{" "}
            </span>
            Les informations médicales du patient sont confidentielles. Elles ne
            peuvent être divulguées sans son consentement, sauf dans les cas
            prévus par la loi.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              5. Droit à la qualité des soins :{" "}
            </span>
            Le patient a le droit de recevoir des soins de qualité, adaptés à
            ses besoins et conformes aux standards professionnels.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              6. Droit à la prise en charge de la douleur :{" "}
            </span>
            Le patient a le droit de bénéficier de soins visant à prévenir,
            évaluer et soulager la douleur.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              {" "}
              7. Droit d&apos;accès au dossier médical :{" "}
            </span>
            Le patient a le droit d&apos;accéder à son dossier médical et de
            demander des copies des documents qui le composent.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              8. Droit à l&apos;accompagnement :{" "}
            </span>
            Le patient a le droit d&apos;être accompagné par une personne de son
            choix lors des consultations et des soins.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              {" "}
              9. Droit à la participation aux décisions :{" "}
            </span>
            Le patient a le droit de participer aux décisions concernant sa
            santé et de désigner une personne de confiance pour l&apos;assister.
          </p>
        </div>

        <h2 className="text-lg text-[#575555] font-semibold text-center uppercase mt-16">
          Devoirs du patient
        </h2>
        <div className="text-[18px] mt-4 p-4 shadow-2xl rounded-3xl">
          <p>
            <span className="font-semibold text-[#D78B8B]">
              1. Respect des professionnels de santé :{" "}
            </span>
            Le patient doit traiter les professionnels de santé avec respect et
            courtoisie.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              2. Respect des règles de l&apos;établissement :{" "}
            </span>
            Le patient doit respecter les règles et les procédures de
            l&apos;établissement de santé où il est pris en charge.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              3. Collaboration avec l&apos;équipe soignante :{" "}
            </span>
            Le patient doit collaborer avec l&apos;équipe soignante en
            fournissant des informations précises sur son état de santé et en
            suivant les recommandations médicales.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-[#D78B8B]">
              4. Respect des autres patients :{" "}
            </span>
            Le patient doit respecter les autres patients et leurs droits,
            notamment en matière de confidentialité et de tranquillité.
          </p>
          <p className="mt-3">
            {" "}
            <span className="font-semibold text-[#D78B8B]">
              5. Responsabilité financière :{" "}
            </span>
            Le patient doit assumer la responsabilité financière des soins qui
            ne sont pas couverts par l&apos;assurance maladie ou d&apos;autres
            dispositifs de prise en charge.
          </p>
        </div>
      </div>
      <div className="bg-[#D1A7A7] p-4 rounded-xl mt-8 mb-8">
        <p className="text-[18px] font-semibold text-[#FFFDFD]">
          La charte du patient est un outil essentiel pour promouvoir une
          relation de confiance et de respect mutuel entre les patients et les
          professionnels de santé. Elle contribue à améliorer la qualité des
          soins et à garantir le respect des droits fondamentaux des patients.
        </p>
      </div>
    </div>
  );
}

export default PatientCharter;
