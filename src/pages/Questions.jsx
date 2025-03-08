import QuestionItem from "../components/questionItem/QuestionItem";

const questions = [
  {
    question:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    reponse:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
  },
  {
    question:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    reponse:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
  },
  {
    question:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    reponse:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
  },
  {
    question:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    reponse:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
  },
];

function Questions() {
  return (
    <div className="flex justify-center m-5">
      <div className=" lg:w-[50%] sm:w-[80%] flex flex-col justify-start">
        <h1 className=" text-[2.5em] text-stone-800 font-bold mb-5">
          Questions fréquentes
        </h1>
        <div className="divide-y divide-stone-200">
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
