import { useNavigate } from "react-router-dom"
import { Copyright } from "lucide-react";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-blue-900 text-stone-100 px-8 py-15">
            <div className="flex flex-row gap-50">
                <div>
                    <h4 className="text-xl font-bold">Órbita</h4>
                    <p className="text-sm">Seu universo de Compras</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Ajuda</h4>
                    <div className="flex flex-col gap-1 text-sm">
                        <a className="cursor-pointer hover:underline" onClick={() => navigate("/noroute")}>FAQ</a>
                        <a className="cursor-pointer hover:underline" onClick={() => navigate("/noroute")}>Trocas e Devoluções</a>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-stone-100/30 pt-6 flex flex-col gap-1 text-sm">
                <span className="flex items-center gap-1">
                    <Copyright className="size-4" />
                    2026 Órbita
                </span>
                <span>Todos os direitos reservados</span>
            </div>
        </footer>
    )
}