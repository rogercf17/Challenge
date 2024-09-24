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
                        <li>Pilotos e Equipes</li>
                        <li>Estatísticas</li>
                        <li>Informações</li>
                        <li>Interativos</li>
                    </ul>
                </nav>
                <div>
                    <button className="bg-slate-800 h-11 w-20 rounded-md">Login</button>
                </div>
            </header>
        </>
    )
}