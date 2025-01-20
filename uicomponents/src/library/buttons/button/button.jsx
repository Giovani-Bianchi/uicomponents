// Importações do react
import { useEffect, useState } from "react";

// Importando as funções e constantes do Componente de Button
import { componentJsCode, componentJsxCode, handleActiveTab, handleCode, handleCopy, initializeTooltips } from "./button.functions.js";

// Importando os Styled Components do Componente de Button
import { Code, Component, CopyButton, Pre, Row, Tab, Tabs, TitleH1 } from "./button.styles.js"

// Importando o Styled Components Global
import { Container, Main } from "../../../styles/global.styles.js";

// Importações do phosphor-icons
import { CopySimple } from "@phosphor-icons/react";

// Importações do react-icons
import { FaJs, FaReact } from "react-icons/fa";

// Importando os componentes
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";

// Importações do Prism.js
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';

function ComponentButton() {

    // Capturando a url da página
    const url = window.location.pathname.split("/");
    
    // Capturando o nome com base na url da página
    const name = url[3];

    // Variável de estado para armazenar o código
    const [code, setCode] = useState(componentJsxCode);

    // Variável de estado par armazenar o ícone do botão de copiar
    const [copyIcon, setCopyIcon] = useState(<CopySimple size={22} />);

    // Inicializando as tooltips
    useEffect(() => {
        initializeTooltips();
    }, []);

    // Ativando o Prism.js
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return <>
    
        {/* Importação da Navbar */}
        <Navbar $gradient />

        {/* Main */}
        <Main>

            {/* Component Section */}
            <section id="component-section">
                <Container>

                    {/* Title */}
                    <TitleH1>{name}</TitleH1>

                    {/* Component - Code Visualizer */}
                    <Row>

                        {/* Component */}
                        <Component>
                            <button>Button</button>
                        </Component>

                        {/* Code */}
                        <Code>

                            {/* Tabs */}
                            <Tabs>
                                
                                {/* React Tab */}
                                <Tab className="active" onClick={() => handleCode(setCode, componentJsxCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaReact size={20} />
                                    JSX
                                </Tab>

                                {/* JS Tab */}
                                <Tab onClick={() => handleCode(setCode, componentJsCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaJs size={20} />
                                    JavaScript
                                </Tab>

                            </Tabs>

                            {/* Copy */}
                            <CopyButton onClick={() => handleCopy(code, setCopyIcon)} id="copy-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy code" data-bs-custom-class="custom-tooltip">
                                {copyIcon}
                            </CopyButton>
        
                            {/* Code Visualizer */}
                            <Pre>
                                <code className="language-jsx">
                                    {code}
                                </code>
                            </Pre>

                        </Code>

                    </Row>

                </Container>
            </section>

        </Main>

        {/* Importação do Footer */}
        <Footer />
    
    </>

}

// Exportando o compontente ComponentButton
export default ComponentButton;