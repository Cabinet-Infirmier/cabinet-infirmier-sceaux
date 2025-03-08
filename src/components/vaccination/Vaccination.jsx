import ServiceTitle from "../serviceTitle/ServiceTitle";

function Vaccination() {
  return (
    <div className="max-w-[1048px] mt-20">
      <div className="mt-5">
        <div className="flex flex-col mt-5">
          <ServiceTitle title="Vaccination" icon="icon-vaccin"></ServiceTitle>
          <div className="flex xl:flex-nowrap flex-wrap-reverse justify-center">
            <div>
              <p className="text-[18px] mt-5">
                L’infirmière joue un rôle essentiel dans la mise en œuvre des
                programmes de vaccination, contribuant ainsi à la santé publique
                et à la prévention des maladies. Nous vaccinons sur prescription
                médicale, sauf dans le cadre des campagnes anti grippale et
                anti- covid.
              </p>
            </div>
            <img
              className="w-60 h-60 mt-5 object-cover rounded-3xl"
              src="/images/service-2.jpg"
              alt="Vaccin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vaccination;
