import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="
            w-screen h-24
            flex justify-around items-center
            border-b border-solid border-slate-700
        ">  
            <NavLink to='/' id="logo">
                <h1>Portal E</h1>
            </NavLink>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to='/pilotosequipes'>Pilotos e Equipes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/estatisticas'>Estatísticas</NavLink>
                    </li>
                    <li>
                        <NavLink to='/informacoes'>Informações</NavLink>
                    </li>
                    <li>
                        <NavLink to='/interativos'>Interativos</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <button className="bg-slate-800 h-11 w-20 rounded-md">Login</button>
            </div>
        </header>
    );
}
