import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';

export default function ClassificacaoPilotos() {
    const [activeTable, setActiveTable] = useState(null);

    const table1 = (
        <table className="
            w-11/12 md:w-10/12 lg:w-8/12
            table-fixed
            border-spacing-2
            text-center
            bg-slate-800 
            shadow-2xl 
            mx-auto
        ">
            <thead className="border-2 border-slate-500">
                <tr className="text-2xl md:text-3xl">
                    <th>Posição</th>
                    <th>Piloto</th>
                    <th>Equipe</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody className="p-4">
                <tr className="h-14">
                    <td className="font-bold">1</td>
                    <td>Pascal Wehrlein</td>
                    <td>TAG Heuer Porsche Formula E Team</td>
                    <td>198</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">2</td>
                    <td>Nick Cassidy</td>
                    <td>Jaguar TCS Racing</td>
                    <td>189</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">3</td>
                    <td>Jake Dennis</td>
                    <td>Andretti Formula E</td>
                    <td>185</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">4</td>
                    <td>Mitch Evans</td>
                    <td>Jaguar TCS Racing</td>
                    <td>176</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">5</td>
                    <td>Jean-Éric Vergne</td>
                    <td>DS Penske</td>
                    <td>151</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">6</td>
                    <td>António Félix da Costa</td>
                    <td>TAG Heuer Porsche Formula E Team</td>
                    <td>129</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">7</td>
                    <td>Maximilian Günther</td>
                    <td>Maserati MSG Racing</td>
                    <td>124</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">8</td>
                    <td>Stoffel Vandoorne</td>
                    <td>DS Penske</td>
                    <td>112</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">9</td>
                    <td>Sam Bird</td>
                    <td>NEOM McLaren Formula E Team</td>
                    <td>108</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">10</td>
                    <td>Sébastien Buemi</td>
                    <td>Envision Racing</td>
                    <td>99</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">11</td>
                    <td>Robin Frijns</td>
                    <td>Envision Racing</td>
                    <td>90</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">12</td>
                    <td>Norman Nato</td>
                    <td>Andretti Formula E</td>
                    <td>84</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">13</td>
                    <td>Oliver Rowland</td>
                    <td>Nissan Formula E Team</td>
                    <td>83</td>
                </tr>
                <tr>
                    <td className="font-bold">14</td>
                    <td>Jake Hughes</td>
                    <td>NEOM McLaren Formula E Team</td>
                    <td>81</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">15</td>
                    <td>Sacha Fenestraz</td>
                    <td>Nissan Formula E Team</td>
                    <td>71</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">16</td>
                    <td>Lucas di Grassi</td>
                    <td>ABT CUPRA Formula E Team</td>
                    <td>41</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">17</td>
                    <td>Dan Ticktum</td>
                    <td>ERT Formula E Team</td>
                    <td>35</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">18</td>
                    <td>Edoardo Mortara</td>
                    <td>Mahindra Racing</td>
                    <td>33</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">19</td>
                    <td>André Lotterer</td>
                    <td>Andretti Formula E</td>
                    <td>31</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">20</td>
                    <td>René Rast</td>
                    <td>NEOM McLaren Formula E Team</td>
                    <td>30</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">21</td>
                    <td>Nico Müller</td>
                    <td>ABT CUPRA Formula E Team</td>
                    <td>23</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">22</td>
                    <td>Nyck de Vries</td>
                    <td>Mahindra Racing</td>
                    <td>21</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">23</td>
                    <td>Sérgio Sette Câmara</td>
                    <td>ERT Formula E Team</td>
                    <td>21</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">24</td>
                    <td>Jehan Daruvala</td>
                    <td>Maserati MSG Racing</td>
                    <td>16</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">25</td>
                    <td>Kelvin van der Linde</td>
                    <td>ABT CUPRA Formula E Team</td>
                    <td>1</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">26</td>
                    <td>David Beckmann</td>
                    <td>Andretti Formula E</td>
                    <td>0</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">27</td>
                    <td>Roberto Merhi</td>
                    <td>Mahindra Racing</td>
                    <td>0</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">28</td>
                    <td>Gabriele Tarquini</td>
                    <td>ERT Formula E Team</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    )
    const table2 = (
        <table className='
            w-11/12 md:w-10/12 lg:w-8/12
            table-fixed
            border-spacing-2
            text-center
            bg-slate-800 
            shadow-2xl 
            mx-auto
        '>
            <thead className="border-2 border-slate-500">
                <tr className="text-2xl md:text-3xl">
                    <th>Posição</th>
                    <th>Equipe</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-14">
                    <td className="font-bold">1</td>
                    <td>Jaguar TCS Racing</td>
                    <td>368</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">2</td>
                    <td>TAG Heuer Porsche Formula E Team</td>
                    <td>332</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">3</td>
                    <td>Envision Racing</td>
                    <td>289</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">4</td>
                    <td>Andretti Formula E</td>
                    <td>269</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">5</td>
                    <td>DS Penske</td>
                    <td>263</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">6</td>
                    <td>Maserati MSG Racing</td>
                    <td>140</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">7</td>
                    <td>NEOM McLaren Formula E Team</td>
                    <td>219</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">8</td>
                    <td>Nissan Formula E Team</td>
                    <td>154</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">9</td>
                    <td>Mahindra Racing</td>
                    <td>54</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">10</td>
                    <td>ABT CUPRA Formula E Team</td>
                    <td>65</td>
                </tr>
                <tr className="h-14">
                    <td className="font-bold">11</td>
                    <td>ERT Formula E Team</td>
                    <td>56</td>
                </tr>
                
            </tbody>
        </table>
    )
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className="flex gap-5 my-4">
                <button
                    onClick={() => setActiveTable('table1')}
                    className='h-14 w-28 bg-teal-500 rounded-full text-black hover:opacity-70'
                >
                    Pilotos
                </button>
                <button
                    onClick={() => setActiveTable('table2')}
                    className='h-14 w-28 bg-teal-500 rounded-full text-black hover:opacity-70'
                >
                    Equipes
                </button>
            </div>
            <div>
                {activeTable === 'table1' && table1}
                {activeTable === 'table2' && table2}
            </div>
        </div>
    )
}