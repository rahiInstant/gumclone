import { Menu, MoveRight } from "lucide-react";
import Pc_nav from "./Pc_nav";
import PhoneNav from "./PhoneNav";
import { useState } from "react";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <div className="fixed top-0  w-full z-50 bg-white/70 mt-0">
      <div
        className="w-full backdrop-blur px-4 xl:px-0 pt-4 pb-2"
        style={{ WebkitBackdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between  items-center h-12 rounded-lg">
            <div className="flex items-center space-x-4">
              {/* logo */}
              <div className="flex items-center">
                <a href="/home">
                  <div className="relative h-28 w-28 ">
                    <img
                      src="/src/assets/gumloop_logo.svg"
                      height={154}
                      width={154}
                      alt="company_logo"
                      className="absolute h-full w-full top-0 right-0 bottom-0 left-0 object-contain bg-transparent"
                    />
                  </div>
                </a>
              </div>
              {/* pc nav */}
              <div className="hidden lg:flex px-8">
                <Pc_nav />
              </div>
              {/* phone nav */}
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <button className="text-sm  group duration-150 group font-medium border-none bg-[#111] h-11 text-white px-7 py-3 gap-1 space-x-2 flex justify-center relative items-center hover:opacity-70 mx-4 mb-2 lg:mb-0 rounded-2xl">
                  <span className="translate-x-4 flex-shrink-0 group-hover:translate-x-2 transition-all duration-200 ease-out">
                    Get started
                  </span>
                  <MoveRight
                    className="flex flex-shrink-0 w-4 h-4 opacity-0  translate-x-1 transform group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out"
                    size={24}
                  />
                </button>
              </div>
              <button
                className="lg:hidden"
                onClick={() => setNavState(!navState)}
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
        {/* phone nav */}
        <div
          className={`fixed inset-0 transform transition-transform ${
            navState ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <PhoneNav navState={navState} setNavState={setNavState} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
