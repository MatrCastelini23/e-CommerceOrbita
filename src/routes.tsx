import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contato } from "./pages/Contato"
import { Produto } from "./pages/Produtos/Produto"
import { Produtos } from "./pages/Produtos"
import { Sobre } from "./pages/Sobre"



export const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/contato"
                    element={<Contato />}
                />
                <Route
                    path="/produtos"
                    element={<Produtos />}
                />
                <Route
                    path="/produto/:id"
                    element={<Produto />}
                />
                <Route
                    path="/sobre"
                    element={<Sobre />}
                />
            </Routes>
        </BrowserRouter>
    )
}