import { FaInstagram,  FaBluesky, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return(
        <>
            <footer className="
                text-slate-300
                flex
                flex-col items-center justify-center
                relative bottom-0  w-screen h-28
                p-3
                gap-3
                z-0
                border-t border-solid border-slate-700
            ">
                <h3 className="text-sm">Siga-nos nas redes sociais</h3>
                <div className="
                    flex flex-row gap-8
                ">
                    <FaInstagram size={25} className="cursor-pointer transition delay-300 hover:text-teal-500"/>
                    <FaBluesky size={25} className="cursor-pointer transition delay-300 hover:text-teal-500"/>
                    <FaFacebook size={25} className="cursor-pointer transition delay-300 hover:text-teal-500"/>
                    <FaTiktok size={25} className="cursor-pointer transition delay-300 hover:text-teal-500"/>
                </div>
                <div>
                    <p className="text-xs">© 2024 E-Portal. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}