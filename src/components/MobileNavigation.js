import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

function MobileNavigataionBar({ routes }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`flex flex-col justify-around ${
        !isOpen && "h-24"
      } items-center md:hidden bg-slate-700 text-zinc-50 drop-shadow-xl`}
    >
      {isOpen ? (
        <div className="w-full h-12 flex flex-row justify-between px-5 py-10 items-center my-auto">
          <span className="text-xl text-white">Unbottled Emotions</span>
          <VscChromeClose
            className="text-white text-2xl cursor-pointer"
            onClick={handleCloseClick}
          />
        </div>
      ) : (
        <div className="w-full flex flex-row justify-between p-5 items-center my-auto">
          <span className="text-xl text-white">Unbottled Emotions</span>
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
                  ? "m-3 p-3 font-semibold text-white text-xl bg-slate-900 cursor-pointer w-full text-center"
                  : "m-3 p-3 text-white text-lg cursor-pointer"
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