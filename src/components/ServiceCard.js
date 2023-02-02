function ServiceCard({ service }) {
  return (
    <div className="w-4/5 md:w-1/4 flex flex-col p-10 bg-gradient-to-b from-gray-200 via-zinc-200 to-gray-200 text-black shadow-xl rounded-xl mb-20 items-center">
      <h5 className="text-2xl md:text-3xl font-bold mb-10">{service.name}</h5>
      {service.description && (
        <p className="md:text-xl text-justify">{service.description} minutes</p>
      )}
      <p className="md:text-xl my-2">Duration: {service.duration} minutes</p>
    </div>
  );
}

export default ServiceCard;
