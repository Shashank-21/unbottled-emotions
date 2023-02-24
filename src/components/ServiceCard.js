import { useSelector } from "react-redux";

function ServiceCard({ service }) {
  const { cardBgColor, headingColor, textColor } = useSelector(
    (state) => state.color
  );
  return (
    <div
      className={`w-4/5 md:w-1/2 xl:w-1/4 flex flex-col p-10 ${cardBgColor} shadow-xl rounded-xl mb-10 items-center`}
    >
      <h5 className={`text-xl md:text-2xl font-bold mb-5 ${headingColor}`}>
        {service.name}
      </h5>
      {service.description && (
        <p
          className={`text-lg md:text-2xl xl:text-xl text-justify ${textColor}`}
        >
          {service.description}
        </p>
      )}
      <p className={`text-lg md:text-2xl xl:text-xl my-2 ${textColor}`}>
        Duration: {service.duration} minutes
      </p>
    </div>
  );
}

export default ServiceCard;
