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
  Menu,
  MessagesSquare,
  MoveRight,
  Newspaper,
  Notebook,
  NotebookPen,
  NotebookText,
  Puzzle,
  Tag,
  Users,
  X,
  Youtube,
} from "lucide-react";
import Pc_nav from "./Pc_nav";

const Navbar = () => {
  return (
    <div
      className="w-full backdrop-blur px-4 xl:px-0 pt-4 pb-2"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-12 rounded-lg">
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
                  className="flex flex-shrink-0 w-4 h-4 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out"
                  size={24}
                />
              </button>
            </div>
            <button className="lg:hidden">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      {/* phone nav */}
      <div className="flex h-full w-full z-[300]">
        <div className="fixed bg-white z-[150] h-full  inset-0">
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
                    className="absolute h-full w-full inset-0 object-contain bg-transparent"
                  />
                </div>
              </a>
              <button>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between py-2 cursor-pointer">
                    <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                      <Combine className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                      <span className="text-lg">Use Cases</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                  </div>
                  <div
                    className="ml-8 mt-2 space-y-2 overflow-hidden"
                    // style="opacity: 1; height: auto;"
                  >
                    <div className="block py-1">
                      <a
                        className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                        href="/ai-web-scraping"
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
                        href="/seo-marketing"
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
                        href="/document-processing"
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
                <div>
                  <div className="flex items-center justify-between py-2 cursor-pointer">
                    <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                      <NotebookText className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                      <span className="text-lg">Resources</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                  </div>
                  <div
                    className="ml-8 mt-2 space-y-2 overflow-hidden"
                    // style="opacity: 1; height: auto;"
                  >
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
                        href="/browser-extension"
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
                        href="https://forum.gumloop.com"
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
                        href="https://docs.gumloop.com/getting-started/introduction"
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
                        href="https://www.youtube.com/@Gumloop_AI"
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
                        href="/changelog"
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
                <div>
                  <div className="flex items-center justify-between py-2 cursor-pointer">
                    <div className="flex items-center space-x-3 group hover:text-pink-500 transition-colors">
                      <Users className="w-5 h-5 text-[#111] group-hover:text-pink-500 transition-colors" />
                      <span className="text-lg">Company</span>
                    </div>
                    <ChevronDown className=" w-5 h-5 text-gray-500 transition-transform" />
                  </div>
                  <div
                    className="ml-8 mt-2 space-y-2 overflow-hidden"
                    // style="opacity: 1; height: auto;"
                  >
                    <div className="block py-1">
                      <a
                        className="flex items-center space-x-2 text-neutral-700 hover:text-pink-500 transition-colors group"
                        href="/love"
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
                        href="/careers"
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
                        href="https://blog.gumloop.com/"
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
                        href="https://blog.gumloop.com/handbook/"
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
                        href="https://blog.gumloop.com/about/"
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
                        href="https://trust.gumloop.com/"
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
                <a className="flex items-center py-2 space-x-3" href="/pricing">
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
    </div>
  );
};

export default Navbar;
