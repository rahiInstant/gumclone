import {
  Bookmark,
  BookOpen,
  Briefcase,
  ChevronDown,
  CircleHelp,
  Combine,
  Globe,
  Heart,
  Layers,
  LockKeyhole,
  MessagesSquare,
  MoveRight,
  Newspaper,
  NotebookPen,
  NotebookText,
  Puzzle,
  Tag,
  Users,
  X,
  Youtube,
} from "lucide-react";

function PhoneNav({ navState, setNavState }) {
  return (
    <div className="flex h-full w-full z-[300]">
      <div className={`fixed bg-white z-[150] h-full inset-0 `}>
        <div className="flex flex-col h-full">
          {/* top part */}
          <div className="flex justify-between items-center p-4 border-b ">
            <a href="/home">
              <div className="relative h-24 w-24 ">
                <img
                  src="/src/assets/gumloop_logo.svg"
                  height={154}
                  width={154}
                  alt="company_logo"
                  className="absolute h-full w-full transform transition-transform inset-0 object-contain bg-transparent"
                />
              </div>
            </a>
            <button onClick={() => setNavState(!navState)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 p-4">
            <div className="space-y-4">
              {/* nav 01 */}
              <div>
                <div className="flex items-center justify-between py-2 cursor-pointer">
                  <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                    <Combine className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                    <span className="text-lg">Use Cases</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                </div>
                <div className="ml-8 mt-2 space-y-2 overflow-hidden">
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Globe className="text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Web Scraping
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Layers className="text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        SEO Marketing
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <BookOpen className="text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Document Processing
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* nav 02 */}
              <div>
                <div className="flex items-center justify-between py-2 cursor-pointer">
                  <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                    <NotebookText className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                    <span className="text-lg">Resources</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                </div>
                <div className="ml-8 mt-2 space-y-2 overflow-hidden">
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="/templates"
                    >
                      <BookOpen className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Templates
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Puzzle className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Chrome Extension
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <MessagesSquare className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Gumloop Forum
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <BookOpen className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Documentation
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Youtube className="text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Youtube Channel
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <NotebookPen className="text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Changelog
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* nav 03 */}
              <div>
                <div className="flex items-center justify-between py-2 cursor-pointer">
                  <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                    <Users className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                    <span className="text-lg">Company</span>
                  </div>
                  <ChevronDown className=" w-5 h-5 text-gray-500 transition-transform" />
                </div>
                <div className="ml-8 mt-2 space-y-2 overflow-hidden">
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Heart className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Wall of Love
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Briefcase className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Careers
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Newspaper className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Blog
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <Bookmark className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Handbook
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <CircleHelp className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        About Us
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                  <div className="block py-1">
                    <a
                      className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                      href="#"
                    >
                      <LockKeyhole className=" text-[#111] group-hover:text-pink-500" />
                      <span className="relative">
                        Security Policies
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* nav 04 */}
              <a className="flex items-center py-2 space-x-3" href="#">
                <Tag className="w-5 h-5 text-[#111]" />
                <span className="text-lg">Pricing</span>
              </a>
            </div>
          </nav>
          <button className="text-sm  group duration-150 group font-medium border-none bg-[#111] h-11 text-white px-7 py-3 gap-1 space-x-2 flex justify-center relative items-center hover:opacity-70 mx-4 mb-2 lg:mb-0 rounded-2xl">
            <span className="translate-x-4 flex-shrink-0 group-hover:translate-x-2 transition-all duration-200 ease-out">
              Get started
            </span>
            <MoveRight
              className="flex flex-shrink-0 w-4 h-4 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out"
              size={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneNav;
