import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
  const {
    headerBgColor,
    headingColor,
    navActiveColor,
    textColor,
    navActiveBorderColor,
  } = useSelector((state) => state.color);

  return (
    <header
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      className={`hidden md:flex md:flex-row md:justify-between md:items-center md:h-24 ${headerBgColor} ${textColor} shadow-xl home-and-header`}
    >
      <p className={`md:text-2xl ${textColor} w-fit brand ml-10 uppercase`}>
        Unbottled Emotions
      </p>

      <div className='flex flex-row justify-center items-center md:mr-10'>
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? `mx-3 font-bold text-sm ${navActiveColor} uppercase border-b-4 ${navActiveBorderColor}`
                  : `mx-3  text-xs header ${headingColor} uppercase`
              }
            >
              {route.name}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}
export default NavigataionBar;
