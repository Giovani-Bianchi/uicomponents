// Importações do react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importação do GlobalLayout
import GlobalLayout from "./globalLayout.jsx";

export function AppRoutes() {

    return (
        <BrowserRouter>
            <GlobalLayout>

                <Routes>
                </Routes>

            </GlobalLayout>
        </BrowserRouter>
    )

}