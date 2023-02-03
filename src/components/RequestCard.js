import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function RequestCard({ request }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div className="w-11/12 md:w-3/5 bg-zinc-300 rounded-lg shadow-lg mx-auto p-5 md:p-10 mt-5">
      <div className="flex flex-row justify-between items-center">
        <p className="text-lg md:text-xl font-bold">
          {request.name} (
          {request.pronouns.customOption
            ? request.pronouns.customOption
            : request.pronouns.selectedOption}
          ), {request.age} - {request.profession}{" "}
          {request.profession === "Both" ? "employee and student" : ""}
        </p>
        {isOpen ? (
          <GoChevronUp
            className="text-lg md:text-xl cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <GoChevronDown
            className="text-lg md:text-xl cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between items-center">
          <p className="text-center text-md md:text-lg mt-5">
            Has {request.name} been to therapy before? {request.beenToTherapy}
          </p>
          <div className="text-center text-md md:text-lg mt-5">
            What are {request.name}'s concerns?{" "}
            <ul className="text-md md:text-lg list-disc list-inside">
              {request.concerns.map((concern, index) => {
                return <li key={index}>{concern}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestCard;
