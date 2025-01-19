// Importação do react
import React from "react"

// Importando o CSS Global
import "./styles/global.css"

// Exportando a função de inicialização das tooltips
export function initializeTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function GlobalLayout({children}) {

    return (
        <>
            {children}
        </>
    )

}

// Exportando o GlobalLayout
export default GlobalLayout