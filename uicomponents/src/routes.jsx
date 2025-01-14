// Importações do react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importação do GlobalLayout
import GlobalLayout from "./globalLayout.jsx";

// Importando os componentes
import Home from "./pages/home/home.jsx";
import Components from "./pages/components/components.jsx";

export function AppRoutes() {

    return (
        <BrowserRouter>
            <GlobalLayout>

                <Routes>

                    {/* Rota - Tela Home/Landing Page */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Rota - Tela Components */}
                    <Route path="/components" element={<Components />} />

                </Routes>

            </GlobalLayout>
        </BrowserRouter>
    )

}