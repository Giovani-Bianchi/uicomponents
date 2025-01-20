// Importação do react
import React from "react";

// Importações do phosphor-icons
import { Check, CopySimple } from "@phosphor-icons/react";

/* --------------------------------------------------------------------------------------------------------
 * Component Codes
---------------------------------------------------------------------------------------------------------- */

// Código JSX do componente
export const componentJsxCode = 
`const greeting = 'Hello, world!';
console.log(greeting);

function sayHello() {
    return greeting;
}
`;

// Código JS (Style) do componente
export const componentJsCode = 
`function sayHello() {
    return greeting;
}
`;

/* --------------------------------------------------------------------------------------------------------
 * Functions
---------------------------------------------------------------------------------------------------------- */

/**
 * Função de inicialização das tooltips
 */
export function initializeTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

/**
 * Função que faz a alteração do código exibido na tela
 * @param codeSnippet - código que será exibido
 */
export function handleCode(setCode, codeSnippet) {
    setCode(codeSnippet);
}

/**
 * Função que adiciona a classe active à tab com focus
 * @param e - refere-se ao evento
 */
export function handleActiveTab(e) {

    // Selecionando todas as tabs
    const activeTabs = document.querySelectorAll(".tab");

    // Removendo a classe active de todas as tabs
    activeTabs.forEach(tab => tab.classList.remove("active"));

    // Adicionando a classe active na tab clicada
    e.target.classList.add('active');

}

/**
 * Função para copiar o código para a área de transferência
 * @param code - código que será copiado
 */
export function handleCopy(code, setCopyIcon) {

    // Copia o código para a área de transferência
    navigator.clipboard.writeText(code)

    // Após copiado o código, executa isso
    .then(() => {

        // Seleciona o botão de copiar
        const copyButton = document.getElementById("copy-button");

        // Seleciona a instância de tooltip do botão de copiar
        const tooltipInstance = bootstrap.Tooltip.getInstance(copyButton);

        // Altera o ícone para o ícone de cópia bem-sucedida
        setCopyIcon(() => React.createElement(Check, { size: 22 }));

        // Se a instância de tooltip existir, atualiza o texto dela
        if (tooltipInstance) {
            tooltipInstance.setContent({ '.tooltip-inner' : 'Copied!' });
            tooltipInstance.show();
        }

        // Aguarda 2 segundos antes de esconder a tooltip e atualizar o texto dela para o estado inicial
        setTimeout(() => {

            // Retorna ao ícone inicial
            setCopyIcon(() => React.createElement(CopySimple, { size: 22 }));

            // Esconde e atualiza o texto
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