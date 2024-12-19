// Importação do StrictMode do react
import { StrictMode } from 'react'

// Importação do createRoot para renderizar o componente
import { createRoot } from 'react-dom/client'

// Criando o root da aplicação
createRoot(document.getElementById('root')).render(

    // Aplicação envolta do StrictMode
    <StrictMode>
    </StrictMode>

)