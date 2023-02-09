import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/UEicon.jpg";

const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function NavigataionBar({ routes }) {
  const color = useSelector((state) => state.color);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`hidden md:flex md:flex-row md:justify-between md:items-center md:h-24 ${color.headerBgColor} ${color.textColor} shadow-xl home-and-header`}
    >
      <div className="flex flex-row w-fit items-center justify-start">
        <img
          src={logo}
          alt="Unbottled Emotions logo"
          className="w-16 h-16 ml-10"
        />
        <span className={`md:text-4xl ${color.textColor} brand ml-3`}>
          Unbottled Emotions
        </span>
      </div>
      <div className="flex flex-row justify-center items-center md:mr-10">
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "mx-3 p-3 font-bold text-xl text-gray-800 border-b-4 border-gray-800"
                  : "mx-3 p-3 text-lg"
              }
            >
              {route.name}
            </NavLink>
          );
        })}
      </div>
    </motion.header>
  );
}
export default NavigataionBar;
