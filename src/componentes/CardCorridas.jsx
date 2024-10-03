export default function CardCorridas(props) {
    return(
        <div className="
            border-4 border-transparent 
            w-52 h-48
            bg-gray-400
            text-slate-950
            flex flex-col gap-3
        ">
            <div className="h-12 w-14 bg-gray-500 text-center">
                <h4 className="font-bold">{props.dia}</h4>
                <p>{props.mes}</p>
            </div>
            <div className="flex flex-col gap-2">
                <img src={props.imagem} alt="Bandeira do país" width={40} height={40} />
                <h4>{props.cidade}</h4>
                <hr className="border-slate-950"/>
                <h4>Round {props.round}</h4>
            </div>
        </div>
    )
}