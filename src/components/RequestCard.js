import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function RequestCard({ request }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cardBgColor } = useSelector((state) => state.color);

  const handleClick = () => {
    setIsOpen((v) => !v);
  };

  if (request.type === "Collaboration") {
    return (
      <motion.div
        layout
        transition={{
          layout: { type: "spring", damping: 25, stiffness: 100 },
        }}
        className={`w-11/12 md:w-4/5 xl:w-3/5 ${cardBgColor} text-zinc-700 rounded-lg shadow-lg mx-auto p-5 md:p-10 mt-5`}
      >
        <motion.div
          layout="position"
          className="flex flex-row justify-between items-center"
        >
          <p className="text-lg md:text-xl font-bold">
            {request.name} ({request.type})
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
        </motion.div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between items-center"
          >
            <div className="w-full flex flex-col md:flex-row justify-around items-center my-5 mx-auto">
              <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start mt-3  md:my-auto items-center">
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Email
                </span>
                <span className="text-lg md:text-xl">{request.email}</span>
              </div>
              <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start  mt-3 md:my-auto items-center">
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Phone
                </span>
                <span className="text-lg md:text-xl">{request.phone}</span>
              </div>
            </div>
            <div className="flex flex-col w-full justify-around items-center md:items-start">
              <span className="font-bold-inline text-lg md:text-xl mr-3 mt-3 text-center md:text-start">
                Reason
              </span>
              <p className="mt-3 text-lg md:text-xl">{request.reason}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        layout
        transition={{
          layout: { type: "spring", damping: 25, stiffness: 100 },
        }}
        className={`w-11/12 md:w-4/5 xl:w-3/5 ${cardBgColor} text-zinc-700 rounded-lg shadow-lg mx-auto p-5 md:p-10 mt-5`}
      >
        <motion.div
          layout="position"
          className="flex flex-row justify-between items-center"
        >
          <p className="text-lg md:text-xl font-bold">
            {request.name} ({request.type})
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
        </motion.div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between items-center"
          >
            <div className="w-full flex flex-col md:flex-row justify-around items-center my-5 mx-auto">
              <div className="w-full md:w-1/3 flex flex-row justify-center md:justify-start mt-3  md:my-auto items-center">
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Pronouns
                </span>
                <span className="text-lg md:text-xl">
                  {" "}
                  {request.pronouns.customOption
                    ? request.pronouns.customOption
                    : request.pronouns.selectedOption}
                </span>
              </div>
              <div className="w-full md:w-1/3 flex flex-row justify-center md:justify-start  mt-3 md:my-auto items-center">
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Age
                </span>
                <span className="text-lg md:text-xl">{request.age}</span>
              </div>
              <div className="w-full md:w-1/3 flex flex-row justify-center md:justify-start mt-3 md:my-auto  items-center">
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Profession
                </span>
                <span className="text-lg md:text-xl">
                  {request.profession}{" "}
                  {request.profession === "Both" ? "employee and student" : ""}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-around md:items-start mx-auto md:mt-3">
              <div
                className="w-full md:w-1/2 flex flex-row justify-center
              md:justify-start mt-3 md:mt-0 items-center"
              >
                <span className="font-bold-inline text-lg md:text-xl mr-3">
                  Has {request.name} been to therapy before?{" "}
                </span>
                <span className="text-lg md:text-xl">
                  {request.beenToTherapy}
                </span>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-around mt-3 md:my-auto items-center md:items-start">
                <span className="font-bold-inline text-lg md:text-xl">
                  What are {request.name}'s concerns?
                </span>
                <ul className="text-lg md:text-xl list-disc list-inside">
                  {request.concerns.map((concern, index) => {
                    return <li key={index}>{concern}</li>;
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  }
}

export default RequestCard;
