// Importação do StrictMode do react
import { StrictMode } from 'react'

// Importação do createRoot para renderizar o componente
import { createRoot } from 'react-dom/client'

// Importação do AppRoutes
import { AppRoutes } from './routes.jsx'

// Criando o root da aplicação
createRoot(document.getElementById('root')).render(

    // Componente de AppRoutes dentro do StrictMode
    <StrictMode>
        <AppRoutes />
    </StrictMode>

)