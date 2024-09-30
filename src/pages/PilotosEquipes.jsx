import CardConteiner from "../componentes/CardConteiner";
import CardPilotos from "../componentes/CardPilotos";
import pilotos from '../dados/pilotos.json';
import equipes from '../dados/equipes.json';
import CardEquipes from "../componentes/CardEquipes";

export default function PilotosEquipes() {
    return(
        <section className="
            my-5
            p-4
            flex flex-col gap-10
        ">
            <div>
                <CardConteiner titulo="Pilotos">
                    {
                        pilotos.map(piloto => (
                            <CardPilotos key={piloto.id} {...piloto}/>
                        ))
                    }
                </CardConteiner>
            </div>
            <div>
                <CardConteiner titulo="Equipes">
                    {
                        equipes.map(equipe => (
                            <CardEquipes key={equipe.id} {...equipe}/>
                        ))
                    }
                </CardConteiner>
            </div>
        </section>
    )
}