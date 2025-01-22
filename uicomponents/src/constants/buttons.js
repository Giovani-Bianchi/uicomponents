/* --------------------------------------------------------------------------------------------------------
 * Importações dos Componentes de Button
---------------------------------------------------------------------------------------------------------- */

// Componente CTAButton
import CompCTAButton from "../library/buttons/ctaButton/ctaButton.jsx"
import { jsxCode as buttonJsxCode, jsCode as buttonJsCode } from "../library/buttons/ctaButton/ctaButton.codes.js"

/* --------------------------------------------------------------------------------------------------------
 * Exportando os components
---------------------------------------------------------------------------------------------------------- */

export const components = {

    CTAButton: {
        component: CompCTAButton,
        jsxCode: buttonJsxCode,
        jsCode: buttonJsCode
    }

}