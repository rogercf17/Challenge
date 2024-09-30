import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="
            w-screen h-28
            flex justify-around items-center
            border-b border-solid border-slate-700
        ">  
            <NavLink to='/' id="logo">
                <img src="./logo.png" alt="Logo" className="h-16 animate-bounce"/>
            </NavLink>
            <nav>
                <ul className="flex gap-5">
                    <li className="delay-500 transition-all hover:text-teal-500">
                        <NavLink to='/pilotosequipes'>Pilotos e Equipes</NavLink>
                    </li>
                    <li className="delay-500 transition-all hover:text-teal-500">
                        <NavLink to='/estatisticas'>Estatísticas</NavLink>
                    </li>
                    <li className="delay-500 transition-all hover:text-teal-500">
                        <NavLink to='/informacoes'>Informações</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <button className="bg-slate-800 h-11 w-20 rounded-md delay-500 transition-all animate-pulse hover:bg-teal-500 hover:text-black">Login</button>
            </div>
        </header>
    );
}
