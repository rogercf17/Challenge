import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <>
            <header className="
                w-screen h-24
                flex justify-around items-center
                border-b border-solid	 border-slate-700	
                "
            >
                <h1>Formula E</h1>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink to='/pilotosequipes'>Pilotos e Equipes</NavLink>
                        </li>
                        <li>
                            <NanLink to='/estatisticas'>Estatísticas</NanLink>
                        </li>
                        <li>
                            <NanLink to='/informacoes'>Informações</NanLink>
                        </li>
                        <li>
                            <NanLink to='/interativos'>Interativos</NanLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className="bg-slate-800 h-11 w-20 rounded-md">Login</button>
                </div>
            </header>
        </>
    )
}