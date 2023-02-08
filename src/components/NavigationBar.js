import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
      <span className={`md:text-2xl ${color.textColor} font-semibold md:ml-10`}>
        Unbottled Emotions
      </span>
      <div className="flex flex-row justify-center items-center md:mr-10">
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "mx-3 p-3 font-bold text-xl text-yellow-200 border-b-4 border-yellow-200"
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
