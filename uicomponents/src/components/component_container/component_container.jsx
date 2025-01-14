// Importando os Styled Components do Componente de Components
import { Brand, Component, ComponentBox, CTA, Text } from "./component_container.styles.js";

// Importações dos ícones do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

// Importações do react-router-dom
import { Link } from "react-router-dom";

function ComponentContainer({children, category, name}) {
    
    return <>
    
        {/* Component Box */}
        <ComponentBox>

            {/* Component */}
            <Component as={Link} to={"/components/" + category + "/" + name}>

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