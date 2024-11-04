import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Estatisticas from './pages/Estatisticas.jsx'
import Informacoes from './pages/Informacoes.jsx'
import PilotosEquipes from './pages/PilotosEquipes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import DetalhesPiloto from './pages/DetalhesPiloto.jsx'
import PuzzlePage from './pages/PuzzlePage.jsx'  // Add this import
import PuzzleEasy from './pages/PuzzleEasy.jsx'
import PuzzleHard from './pages/PuzzleHard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: '/estatisticas', element: <Estatisticas/>},
      {path: '/informacoes', element: <Informacoes/>},
      {path: '/pilotosequipes', element: <PilotosEquipes/>},
      {path: '/pilotosequipes/:id', element: <DetalhesPiloto/>},
      {path: '/puzzle', element: <PuzzlePage/>},  // Add this route
      {path: '/puzzle/easy', element: <PuzzleEasy/>},  // Add this route
      {path: '/puzzle/hard', element: <PuzzleHard/>},  // Add this route

      {path: '*', element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
