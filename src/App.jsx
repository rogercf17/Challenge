import Header from "./componentes/Header";
import { Outlet } from "react-router-dom";
import Footer from "./componentes/Footer";


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
