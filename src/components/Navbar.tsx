import logo from "../../public/imgs/logo-text.png";
import xboxIcon from "../../public/icons/xbox icon.svg";
import steamIcon from "../../public/icons/steam icon.svg";
import dropdownIcon from "../../public/icons/dropdown icon.svg";
import { useState } from "react";
// import { Reactcomponent as dropdownIcon } from "../../public/icons/dropdown icon.svg";

// import { DropdownIcon } from "../assets/icon";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="absolute z-10 flex w-full flex-col items-center justify-center px-10 text-[#e3ca8e] sm:flex-row sm:justify-between lg:px-[120px] ">
      <img className="h-16 sm:h-20" src={logo} alt="logo" />
      <ul className=" hidden w-[600px] items-center justify-between lg:flex">
        <li className="translate-all cursor-pointer uppercase duration-300 hover:text-[#b89543]">
          Main
        </li>
        <li className="translate-all cursor-pointer uppercase duration-300 hover:text-[#b89543]">
          Key features
        </li>
        <li className="translate-all cursor-pointer uppercase duration-300 hover:text-[#b89543]">
          Characters
        </li>
        <li className="translate-all cursor-pointer uppercase duration-300 hover:text-[#b89543]">
          Media gallery
        </li>
        <li className="translate-all cursor-pointer uppercase duration-300 hover:text-[#b89543]">
          Purchase
        </li>
      </ul>
      <div className="flex items-center">
        <div className="relative">
          <div
            className="translate-all mr-5 flex cursor-pointer items-center duration-300"
            onClick={() => setDropdown(!dropdown)}
          >
            <div className="translate-all flex cursor-pointer duration-300 hover:text-[#b89543]">
              ENG
            </div>
            <img
              className="ml-[6px] text-white"
              src={dropdownIcon}
              alt="dropdown"
            />
            {dropdown ? (
              <ul className="absolute -left-3 top-[120%] w-full bg-black py-2">
                <li className="px-3 hover:text-white">RUS</li>
                <li className="px-3 hover:text-white">FRA</li>
                <li className="px-3 hover:text-white">VNM</li>
              </ul>
            ) : null}
          </div>
          <div className="absolute right-0 top-0 h-full w-[2px] bg-[#e3ca8e]"></div>
        </div>
        <img
          className="ml-5 h-[30px] w-[30px] cursor-pointer text-[#e3ca8e] hover:text-[#b89543]"
          src={xboxIcon}
          alt="xbox-logo"
        />
        <img
          className="ml-5 h-[30px] w-[30px] cursor-pointer"
          src={steamIcon}
          alt="steam-logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
