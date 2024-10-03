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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: '/estatisticas', element: <Estatisticas/>},
      {path: '/informacoes', element: <Informacoes/>},
      {path: '/pilotosequipes', element: <PilotosEquipes/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
