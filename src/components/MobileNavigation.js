import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { useSelector } from "react-redux";

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
          <span className="text-xl text-zinc-700 home-and-header ml-1">
            Unbottled Emotions
          </span>

          <VscChromeClose
            className="text-zinc-700 text-2xl cursor-pointer"
            onClick={handleCloseClick}
          />
        </div>
      ) : (
        <div className="w-full flex flex-row justify-between p-5 items-center my-auto">
          <span className="text-xl text-zinc-700 home-and-header ml-1">
            Unbottled Emotions
          </span>

          <AiOutlineMenu
            className="text-zinc-700 text-2xl cursor-pointer"
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
                  ? "m-3 p-3 font-bold text-zinc-800 text-xl bg-pink-300 cursor-pointer w-full text-center"
                  : "m-3 p-3 text-zinc-700 text-lg cursor-pointer home-and-header"
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
