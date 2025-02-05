import { ChevronDown, Combine, NotebookText, Tags, Users } from "lucide-react"


function Pc_nav() {
  return (
    <nav className="relative rounded-full flex justify-center px-0 py-1">
    <div className="flex space-x-8 sm:space-x-6 md:space-x-8 lg:space-x-10">
      {/* first-nav */}
      <div className="">
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="rounded-lg p-2 mb-1">
            <Combine size={24} className="text-[#111] group-hover:text-pink-500 transition-colors w-4 h-4 md:w-6 md:h-6"/>
          </div>
          <p className="group-hover:text-pink-500 transition-colors">Use Cases</p>
          <div className=" group-hover:rotate-180 duration-150">
            <ChevronDown className="group-hover:text-pink-500 transition-colors " size={16} />
          </div>
        </div>
      </div>
      {/* second nav */}
      <div className="">
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="rounded-lg p-2 mb-1">
            <NotebookText size={24} className="text-[#111] group-hover:text-pink-500 transition-colors w-4 h-4 md:w-6 md:h-6"/>
          </div>
          <p className="group-hover:text-pink-500 transition-colors">Resourses</p>
          <div className=" group-hover:rotate-180 duration-150">
            <ChevronDown className="group-hover:text-pink-500 transition-colors" size={16} />
          </div>
        </div>
      </div>
      {/* third nav */}
      <div className="">
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="rounded-lg p-2 mb-1">
            <Users className="text-[#111] group-hover:text-pink-500 transition-colors w-4 h-4 md:w-6 md:h-6"/>
          </div>
          <p className="group-hover:text-pink-500 transition-colors">Company</p>
          <div className=" group-hover:rotate-180 duration-150">
            <ChevronDown className="group-hover:text-pink-500 transition-colors" size={16} />
          </div>
        </div>
      </div>
      {/* fourth nav */}
      <div className="">
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="rounded-lg p-2 mb-1">
            <Tags size={24} className="text-[#111] group-hover:text-pink-500 transition-colors w-4 h-4 md:w-6 md:h-6"/>
          </div>
          <p className="group-hover:text-pink-500 transition-colors">Pricing</p>
          <div className=" group-hover:rotate-180 duration-150">
            <ChevronDown className="group-hover:text-pink-500 transition-colors" size={16} />
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Pc_nav