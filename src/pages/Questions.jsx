import QuestionItem from "../components/questionItem/QuestionItem";

const questions = [
  {
    question: "J’ai besoin d’une infirmière, comment prendre rendez-vous ?",
    reponse:
      "Vous pouvez nous contacter par téléphone, SMS ou mail pour toute demande de soins (ou questions). Préciser votre nom, les soins, votre téléphone et votre adresse (soin à domicile) N’hésitez pas à nous laisser un message vocal ou SMS, car nous pouvons être en soins.",
  },
  {
    question: "Quels sont les soins infirmiers non pris en charge ?",
    reponse:
      "Les soins infirmiers qui ne sont généralement pas pris en charge par la Sécurité sociale incluent : les actes non prescrits par un médecin, les soins à visée esthétique, ainsi que certains soins hors nomenclature. Pour des informations précises et à jour, il est recommandé de consulter le site de l'Assurance Maladie ou de contacter votre caisse d'assurance maladie.",
  },
  {
    question:
      "Un proche est en perte d’autonomie et a besoin d’une infirmière à domicile. Quelle ordonnance demander au médecin pour que les soins infirmiers soient pris en charge ?",
    reponse:
      "Dans le cadre d’une perte d’autonomie, le médecin prescrira une ordonnance de Bilan de soins infirmiers (BSI) pour patient dépendant à domicile. L’infirmière évaluera alors les besoins du patient.",
  },
];

function Questions() {
  return (
    <div className="flex justify-center m-5">
      <div className=" lg:w-[50%] sm:w-[80%] flex flex-col justify-start">
        <h2 className=" text-[2.5em] text-stone-500 font-bold mb-5">
          Questions fréquentes
        </h2>
        <div className="divide-y divide-stone-200 text-stone-700 ">
          {questions.map((question, index) => (
            <QuestionItem
              key={index}
              question={question.question}
              response={question.reponse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
