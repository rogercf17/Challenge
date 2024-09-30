export default function CardEquipes({id, nome, paisDeOrigem, vitorias, corridas, podios}) {
    return(
        <div className="
            flex flex-col 
            w-60 h-52
            p-5
            gap-4 
            justify-between 
            shadow-2xl 
            cursor-pointer
            bg-slate-800 
            hover:scale-105
            hover:text-teal-500
        ">
            <h2 className="text-xl font-bold">{nome}</h2>
            <div className="flex flex-row items-center justify-center gap-5 text-xs">
                <div className="text-center">
                    <h3>Vitórias</h3>
                    <h3>{vitorias}</h3>
                </div>
                <div className="text-center">
                    <h3>Corridas</h3>
                    <h3>{corridas}</h3>
                </div>
                <div className="text-center">
                    <h3>Pódios</h3>
                    <h3>{podios}</h3>
                </div>
            </div>
            <h2 className="text-right text-base">Sede: {paisDeOrigem}</h2>
        </div>
    )
}