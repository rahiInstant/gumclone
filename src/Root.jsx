import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen w-full max-w-screen overflow-x-clip">
      <Navbar />
      <div className="bg-white mt-20">
        <div className="w-full max-w-full">
          <main className="relative w-full overflow-x-hidden [@media(max-height:800px)]:pt-24">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
