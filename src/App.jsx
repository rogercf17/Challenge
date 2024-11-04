import Header from "./componentes/Header";
import { Outlet } from "react-router-dom";
import Footer from "./componentes/Footer";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-auto scrollbar-visible ">
      <Header />
      <Outlet className="flex-grow"/>
      <Footer />
      </div>
  )
}
