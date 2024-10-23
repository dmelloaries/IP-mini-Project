import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from React Router
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";

import { useSelector } from "react-redux"; // Import useSelector
import LOGO_URL from "../image.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Profile");
  const cartItems = useSelector((store) => store.cart.items); // Use useSelector to get cart items
  const navigate = useNavigate(); // Get the useNavigate hook

  const handleProfileClick = () => {
    if (btnNameReact === "Profile") {
      navigate("/profile"); // Navigate to the profile page
    } else {
      setBtnNameReact("Profile");
      // Add any logout logic here
    }
  };

  return (
    <div className="drop-shadow-xl bg-white">
      <div className="flex justify-between items-center p-4">
        <div className="logo-container ">
          <Link to="/">
            <img className="w-48 " alt="Logo" src={LOGO_URL} />
          </Link>
        </div>
        <div className="">
          <ul className="text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex">
            <li>
              <Link
                to="/search"
                className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  Search
                </p>
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <HomeIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <BuildingOfficeIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  Contact
                </p>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="p-2 relative md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <ShoppingBagIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  Cart ({cartItems.length})
                </p>
              </Link>
            </li>
            <li>
              <button
                className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
                onClick={handleProfileClick}
              >
                <UserIcon className="w-4 h-4 text-gray-700 group-hover:text-orange-500" />
                <p className="hidden md:block group-hover:text-orange-500">
                  {btnNameReact}
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;