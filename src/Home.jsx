import { Calendar, MoveRight } from "lucide-react";

const Home = () => {
  return (
    <section className="flex justify-center items-center px-8 xl:px-0">
      <section className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full py-24 lg:py-8">
          <div className="flex flex-col  w-full justify-between">
            {/* part 01 */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[40px] lg:text-[64px] text-[#111] font-semibold leading-[115%]">
                Automate any workflow
              </h1>
              <h1 className="text-[40px] lg:text-[64px] text-primary font-semibold leading-[115%]">
                with AI
              </h1>
            </div>
            {/* part 02 */}
            <div className="max-w-xl text-[24px] lg:text-[36px] text-[#111] font-semibold leading-[115%] pt-4">
              No coding required.
            </div>
            {/* part 03 */}
            <div className="flex justify-center md:justify-start gap-4 md:pt-12">
              <a href="#">
                <button
                  type="button"
                  className="space-x-2 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center bg-[#111] border border-transparent relative text-white hover:bg-[#111]/80 transition-all duration-150 rounded-3xl gap-[8px] py-4 text-md px-4 md:px-16 group"
                >
                  <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-200 ease-out text-sm md:text-md">
                    Get started (it's free)
                  </span>
                  <MoveRight className="flex flex-shrink-0 w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out" />
                </button>
              </a>
              <a href="#">
                <button
                  type="button"
                  className="space-x-2 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center bg-white border border-[#ccc] relative text-black hover:bg-gray-50 transition-all duration-150 rounded-3xl gap-[8px] py-4 text-md px-4 md:px-16 group"
                >
                  <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-200 ease-out text-sm md:text-md">
                    Book demo
                  </span>
                  <Calendar className="flex flex-shrink-0 w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ease-out" />
                </button>
              </a>
            </div>
            {/* part 04 */}
            <div className="w-full pt-8 md:pt-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-lg md:text-2xl font-semibold">
                  Trusted by
                </h2>
                <div className="flex flex-wrap items-center gap-x-8">
                  <div className="flex relative grayscale opacity-50 hover:opacity-100 transition-opacity">
                    <img src="/src/assets/webflow_logo.webp" />
                  </div>
                  <div className="flex relative grayscale opacity-50 hover:opacity-100 transition-opacity">
                    <img src="/src/assets/rippling.webp" />
                  </div>
                  <div className="flex relative grayscale opacity-50 hover:opacity-100 transition-opacity mb-[3px]">
                    <img src="/src/assets/siena_logo.webp" />
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  *Not just logos, they actually use the platform.
                </span>
              </div>
            </div>
          </div>
          {/* react flow */}
          
          <div></div>
        </div>
      </section>
    </section>
  );
};

export default Home;
