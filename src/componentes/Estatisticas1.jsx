import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { Link } from 'react-router-dom'

const dataVitorias = [
    { nome: 'António Félix', vitorias: 4 },
    { nome: 'Pascal Wehrlein', vitorias: 3 },
    { nome: 'Nick Cassidy', vitorias: 2 },
    { nome: 'Mitch Evans', vitorias: 2 },
    { nome: 'Oliver Rowland', vitorias: 2 },
]
const dataPole = [
    { nome: 'Jake Hughes', pole: 2 },
    { nome: 'Nick Cassidy', pole: 2 },
    { nome: 'Mitch Evans', pole: 2 },
    { nome: 'Sacha Fenestraz', pole: 2 },
    { nome: 'Jake Dennis', pole: 2 },
]
const dataPodios = [
    { nome: 'Nick Cassidy', podios: 8 },
    { nome: 'Oliver Rowland', podios: 7 },
    { nome: 'Mitch Evans', podios: 6 },
    { nome: 'Pascal Wehrlein', podios: 5 },
    { nome: 'António Félix', podios: 4 },
]
const dataVoltasMaisRapidas = [
    { nome: "Mitch Evans", tempo: 68.324 },
    { nome: "Nick Cassidy", tempo: 68.410 },
    { nome: "Jake Hughes", tempo: 68.510 },
    { nome: "Pascal Wehrlein", tempo: 68.590 },
    { nome: "Sacha Fenestraz", tempo: 68.670 },
]

const PilotosComMaisVitorias = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 p-3" >
            <ResponsiveContainer width={690} height={300}>
                <h3 className='text-lg italic text-center text-pretty'>
                    Pilotos com mais vitórias na temporada
                </h3>
                <BarChart
                    data={dataVitorias}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="vitorias" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width={690} height={300} >
                <h3 className='text-lg italic text-center text-pretty'>
                    Pilotos com mais pole positions na temporada
                </h3>
                <BarChart
                    data={dataPole}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="pole" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width={690} height={300}>
                <h3 className='text-lg italic text-center text-pretty'>
                    Pilotos com mais pódios na temporada
                </h3>
                <BarChart
                    data={dataPodios}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="podios" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width={690} height={300}>
                <h3 className='text-lg italic text-center text-pretty'>
                    Voltas mais rápidas da temporada
                </h3>
                <BarChart
                    data={dataVoltasMaisRapidas}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="tempo" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PilotosComMaisVitorias