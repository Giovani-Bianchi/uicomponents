// Importações do react
import { useState } from "react";

// Importando os Styled Components do Componente de Component Card
import { Component, ComponentBox, ComponentContent, Counter, CTAButton, GradientBackground, TitleH2 } from "./component_card.styles.js"

// Importações dos ícones do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

function ComponentCard({ title, counter, link }) {

    // State de Hover para o Gradient Background
    const [isHovered, setIsHovered] = useState(false);

    return <>
    
        {/* Component Box */}
        <ComponentBox>
            <Component>

                {/* Gradient Background on Hover */}
                <GradientBackground $isHovered={isHovered} />

                {/* Counter */}
                <Counter>{counter}</Counter>

                {/* Component Content */}
                <ComponentContent>

                    {/* Title */}
                    <TitleH2>{title}</TitleH2>

                    {/* Link Button */}
                    <CTAButton to={link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        See the library
                        <ArrowRight size={20} style={{marginLeft: 4}} className="cta-button-icon" />
                    </CTAButton>

                </ComponentContent>
                                        
            </Component>
        </ComponentBox>

    </>

}

// Exportando o componente ComponentCard
export default ComponentCard;