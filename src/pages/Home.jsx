import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="flex flex-col items-center justify-center w-10/12 p-5 my-2 gap-5 mx-auto">
            <Link to="/pilotosequipes" className="w-full">
                <div className="
                    w-full h-32 
                    p-5
                    shadow-2xl 
                    cursor-pointer
                    bg-slate-800
                    rounded-3xl
                    transition-all
                    hover:scale-105
                ">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">Pilotos e Equipes</h2>
                    <p className="text-sm md:text-base">Conheça todos os pilotos e equipes</p>
                </div>
            </Link>

            <Link to="/estatisticas" className="w-full">
                <div className="
                    w-full h-32 
                    p-5
                    shadow-2xl 
                    cursor-pointer
                    bg-slate-800
                    rounded-3xl
                    transition-all
                    hover:scale-105
                ">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">Estatísticas</h2>
                    <p className="text-sm md:text-base">Veja a classificação da atual temporada</p>
                </div>
            </Link>
           
            <Link to="/informacoes" className="w-full">
                <div className="
                    w-full h-32 
                    p-5
                    shadow-2xl 
                    cursor-pointer
                    bg-slate-800
                    rounded-3xl
                    transition-all
                    hover:scale-105
                ">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">Informações</h2>
                    <p className="text-sm md:text-base">Conheça mais sobre a Formula E</p>
                </div>
            </Link>
        </div>
    )
}