import { useNavigate } from "react-router-dom";
import NursingCareItem from "../nursing-care-item/NursingCareItem";

function Note() {
  const noteArray = [
    "Certains soins ne sont pas pris en charge par la CPAM (prise de la tension, bandes ou bas de contention non accompagnée d’un pansement d’ulcère ou greffe cutanée…) s’ils ne rentrent pas dans le cadre d’une personne dépendante (BSI) ",
    "Avant le premier rendez-vous avec l’infirmière, pensez à récupérer le matériel nécessaire en pharmacie prescrit par votre médecin.",
    "L’infirmière est habilité à prescrire du matériel nécessaire pour la suite de vos soins (conformément à l’article du 20 mars 2018)",
  ];

  const navigate = useNavigate();
  return (
    <div className="max-w-[1048px] my-10">
      <div>
        <h3 className="my-10">A SAVOIR</h3>
        <div className="flex justify-center xl:flex-nowrap flex-wrap-reverse">
          <div className="flex justify-end">
            <div className="flex-1">
              {noteArray.map((item) => (
                <NursingCareItem key={item}>{item}</NursingCareItem>
              ))}
            </div>
          </div>

          <div></div>
          <img
            className="w-60 h-60 object-cover rounded-3xl"
            src="/images/service-4.jpg"
            alt="Service infirmière"
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
