import Classificacao from "../componentes/Classificacao"

export default function Estatisticas() {
    return(
        <section className="
            flex flex-col items-center justify-center 
        ">
            <h2 className="text-2xl text-teal-800 font-bold">Classificação temporada 23/24</h2>
            <Classificacao />
        </section>
    )
}