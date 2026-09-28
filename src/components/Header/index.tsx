import { useNavigate } from "react-router-dom"
import { ShoppingCartPlus } from "lucide-react";

const links = [
    { label: "Home", path: "/" },
    { label: "Produtos", path: "/produtos" },
    { label: "Contato", path: "/contato" },
    { label: "Sobre", path: "/sobre" },
];

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full text-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div>
                    <img
                        src="https://ecommerce-orbita.vercel.app/logo_orbita_ecommerce.png"
                        alt="Órbita Ecommerce"
                        className="cursor-pointer"
                        style={{ width: "300px" }}
                        onClick={() => navigate("/")}
                    />
                </div>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {links.map(({ label, path }) => (
                            <li key={path}>
                                <button
                                    onClick={() => navigate(path)}
                                    className="cursor-pointer transition-colors hover:text-stone-700"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => navigate("/carrinho")}
                        aria-label="Carrinho"
                        className="cursor-pointer transition-colors hover:text-stone-700"
                    >
                        <ShoppingCartPlus />
                    </button>
                </div>
            </nav>
        </header>
    )
}