// Importações do styled-components do CTAButton
import { CTAButton } from "./ctaButton.styles.js";

// Importação do ícone do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

function CompCTAButton() {

    return <>
    
        <CTAButton>
            Find out how
            <ArrowRight size={24} className="cta-button-icon" />
        </CTAButton>
    
    </>

}

// Exportando o componente CompCTAButton
export default CompCTAButton;