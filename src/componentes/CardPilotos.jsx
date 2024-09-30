export default function CardPilotos({id, nome, idade, nacionalidade, time, numero}) {
    return(
        <div className="
            flex flex-col 
            w-60 h-48
            p-5
            gap-4 
            justify-between 
            shadow-2xl 
            cursor-pointer
            bg-slate-800 
            hover:scale-105
            hover:text-teal-500
        ">
            <div className="flex flex-row justify-between">
                <div>
                    <h3 className="text-xl font-bold">{nome}</h3>
                    <h4 className="text-xs">Idade:{idade}</h4>
                    <h4 className="text-xs">{nacionalidade}</h4>
                </div>
                <div>
                    <h2>{numero}</h2>
                </div>
            </div>
            <h2>{time}</h2>
        </div>
    )
}