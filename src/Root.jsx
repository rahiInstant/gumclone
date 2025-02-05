import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Root = () =>  {
  return (

  <div className="font-inter flex flex-col min-h-screen w-full max-w-screen overflow-x-clip">
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
  </div>
  )
}

export default Root
