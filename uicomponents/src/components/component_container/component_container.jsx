// Importando os Styled Components do Componente de Components
import { Brand, Component, ComponentBox, CTA, Text } from "./component_container.styles.js";

// Importações dos ícones do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

// Importações do react-router-dom
import { useNavigate } from "react-router-dom";

function ComponentContainer({children, category, name}) {

    // Instanciando o navigate
    const navigate = useNavigate();

    // Lógica do navigate
    const handleNavigate = () => {

        // Redirecionando o usuário para a tela do componente, passando o nome do componente
        navigate("/components/" + category + "/" + name, {
            state: { name: name }
        });

    }
    
    return <>
    
        {/* Component Box */}
        <ComponentBox>

            {/* Component */}
            <Component onClick={handleNavigate}>

                {/* Brand */}
                <Brand />

                {/* CTA */}
                <CTA>
                    Get Code
                    <ArrowRight size={18} style={{marginLeft: 4}} />
                </CTA>

                {/* Content */}
                {children}

            </Component>

            {/* Component Name */}
            <Text $textColor="var(--secondary-medium)" $fontSize="16px" $textAlign="end">{name}</Text>

        </ComponentBox>

    </>

}

// Exportando o componente ComponentContainer
export default ComponentContainer;