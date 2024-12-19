// Importação do react
import React from "react"

// Importando o CSS Global
import "./styles/global.css"

function GlobalLayout({children}) {

  return (
    <>
        {children}
    </>
  )
}

// Exportando o GlobalLayout
export default GlobalLayout