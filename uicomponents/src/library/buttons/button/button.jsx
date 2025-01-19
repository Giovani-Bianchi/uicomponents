// Importações do react
import { useEffect, useState } from "react";

// Importando a função de inicializar as tooltips do globalLayout
import { initializeTooltips } from "../../../globalLayout.jsx";

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

// Código JSX do componente
const componentJsxCode = 
`const greeting = 'Hello, world!';
console.log(greeting);

function sayHello() {
    return greeting;
}
`;

// Código JS (Style) do componente
const componentJsCode = 
`function sayHello() {
    return greeting;
}
`;

function ComponentButton() {

    // Capturando a url da página
    const url = window.location.pathname.split("/");
    
    // Capturando o nome com base na url da página
    const name = url[3];

    // Variável de estado para armazenar o código
    const [code, setCode] = useState(componentJsxCode);

    // Função que faz a alteração do código exibido na tela
    function handleCode(codeSnippet) {
        setCode(codeSnippet);
    }

    // Função que adiciona a classe active à tab com focus
    function handleActiveTab(e) {

        // Selecionando todas as tabs
        const activeTabs = document.querySelectorAll(".tab");

        // Removendo a classe active de todas as tabs
        activeTabs.forEach(tab => tab.classList.remove("active"));

        // Adicionando a classe active na tab clicada
        e.target.classList.add('active');

    }

    // Função para copiar o código para a área de transferência
    function handleCopy() {

        // Copia o código para a área de transferência
        navigator.clipboard.writeText(code)

        // Após copiado o código, executa isso
        .then(() => {

            // Seleciona o botão de copiar
            const copyButton = document.getElementById("copy-button");

            // Seleciona a instância de tooltip do botão de copiar
            const tooltipInstance = bootstrap.Tooltip.getInstance(copyButton);

            // Se a instância de tooltip existir, atualiza o texto dela
            if (tooltipInstance) {
                tooltipInstance.setContent({ '.tooltip-inner' : 'Copied!' });
                tooltipInstance.show();
            }

            // Aguarda 2 segundos antes de esconder a tooltip e atualizar o texto dela para o estado inicial
            setTimeout(() => {
                if (tooltipInstance) {
                    tooltipInstance.hide();
                    tooltipInstance.setContent({ '.tooltip-inner' : 'Copy code' });
                }
            }, 2000);

        })
        
        // Caso de erro, mostrar mensagem
        .catch(err => {
            alert("Erro ao copiar o código: ", err);
        });

    }

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
                                <Tab className="active" onClick={() => handleCode(componentJsxCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaReact size={20} />
                                    JSX
                                </Tab>

                                {/* JS Tab */}
                                <Tab onClick={() => handleCode(componentJsCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaJs size={20} />
                                    JavaScript
                                </Tab>

                            </Tabs>

                            {/* Copy */}
                            <CopyButton onClick={() => handleCopy()} id="copy-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy code" data-bs-custom-class="custom-tooltip">
                                <CopySimple size={22} />
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