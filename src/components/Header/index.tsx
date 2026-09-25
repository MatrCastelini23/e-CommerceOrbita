import { useNavigate } from "react-router-dom"


export const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate("/produtos")}
                        >
                            Produtos
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate("/contato")}
                        >
                            Contato
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate("/sobre")}
                        >
                            Sobre
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}