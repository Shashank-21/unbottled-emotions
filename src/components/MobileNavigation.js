import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../images/UEicon.jpg";

function MobileNavigataionBar({ routes }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const color = useSelector((state) => state.color);

  return (
    <header
      className={`flex flex-col justify-around ${
        !isOpen && "h-24"
      } items-center md:hidden ${color.headerBgColor} ${
        color.textColor
      } drop-shadow-xl`}
    >
      {isOpen ? (
        <div className="w-full h-12 flex flex-row justify-between px-5 py-10 items-center my-auto">
          <div className="flex flex-row w-fit items-center justify-start">
            <img
              src={logo}
              alt="Unbottled Emotions logo"
              className="w-16 h-16"
            />
            <span className="text-xl text-white home-and-header ml-1">
              Unbottled Emotions
            </span>
          </div>
          <VscChromeClose
            className="text-white text-2xl cursor-pointer"
            onClick={handleCloseClick}
          />
        </div>
      ) : (
        <div className="w-full flex flex-row justify-between p-5 items-center my-auto">
          <div className="flex flex-row w-fit items-center justify-start">
            <img
              src={logo}
              alt="Unbottled Emotions logo"
              className="w-16 h-16"
            />
            <span className="text-xl text-white home-and-header ml-1">
              Unbottled Emotions
            </span>
          </div>
          <AiOutlineMenu
            className="text-white text-2xl cursor-pointer"
            onClick={handleOpenClick}
          />
        </div>
      )}
      {isOpen &&
        routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "m-3 p-3 font-bold text-yellow-200 text-xl bg-fuchsia-900 cursor-pointer w-full text-center"
                  : "m-3 p-3 text-white text-lg cursor-pointer home-and-header"
              }
            >
              {route.name}
            </NavLink>
          );
        })}
    </header>
  );
}
export default MobileNavigataionBar;
