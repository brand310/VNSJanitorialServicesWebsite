import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <h1 className="text-6xl">Logo 1</h1>

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="text-base text-gray-700 lg:flex lg:justify-between">
            <li>
              <a
                className="lg:px-5 py-2 block hover:text-blue-700 font-semibold"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="lg:px-5 py-2 block hover:text-blue-700 font-semibold"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="lg:px-5 py-2 block hover:text-blue-700 font-semibold"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 block bg-blue-700 text-white rounded-xl"
                href="#"
              >
                CALL US!
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
