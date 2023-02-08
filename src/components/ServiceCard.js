function ServiceCard({ service }) {
  return (
    <div className="w-4/5 md:w-1/4 flex flex-col p-10 bg-indigo-200 text-black shadow-xl rounded-xl mb-10 items-center">
      <h5 className="text-2xl md:text-3xl font-bold mb-5">{service.name}</h5>
      {service.description && (
        <p className="text-xl md:text-2xl text-justify">
          {service.description}
        </p>
      )}
      <p className="text-xl md:text-2xl my-2">
        Duration: {service.duration} minutes
      </p>
    </div>
  );
}

export default ServiceCard;
