// Importação do react
import React, { useEffect, useState } from "react"

// Importando o CSS Global
import "./styles/global.css"

// Importando o ToTopButton
import { ToTopButton } from "./styles/global.styles.js"

// Importações do phosphor-icons
import { CaretUp } from "@phosphor-icons/react"

function GlobalLayout({ children }) {

    // Define o estado 'isScrolled' para armazenar se o usuário já rolou a página além de 800px
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect para lidar com o evento de rolagem da página
    useEffect(() => {

        // Função que verifica a posição do scroll e atualiza o estado
        const handleScroll = () => {
            // Atualiza 'isScrolled' para true se o scrollY for maior que 800, caso contrário, false
            setIsScrolled(window.scrollY > 800);
        };

        // Adiciona o evento de rolagem à janela para disparar a função handleScroll
        window.addEventListener('scroll', handleScroll);

        // Remove o evento de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            {children}

            <ToTopButton as="a" href="#header" $isScrolled={isScrolled}>
                <CaretUp size={24} />
            </ToTopButton>
        </>
    )

}

// Exportando o GlobalLayout
export default GlobalLayout