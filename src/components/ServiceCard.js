import { useSelector } from "react-redux";

function ServiceCard({ service }) {
  const { cardBgColor } = useSelector((state) => state.color);
  return (
    <div
      className={`w-4/5 md:w-1/2 xl:w-1/4 flex flex-col p-10 ${cardBgColor} shadow-xl rounded-xl mb-10 items-center`}
    >
      <h5 className="text-xl md:text-3xl xl:text-2xl font-bold mb-5 text-zinc-700">
        {service.name}
      </h5>
      {service.description && (
        <p className="text-lg md:text-2xl xl:text-xl md:text-xl text-justify text-zinc-600">
          {service.description}
        </p>
      )}
      <p className="text-lg md:text-2xl xl:text-xl md:text-xl my-2 text-zinc-600">
        Duration: {service.duration} minutes
      </p>
    </div>
  );
}

export default ServiceCard;
