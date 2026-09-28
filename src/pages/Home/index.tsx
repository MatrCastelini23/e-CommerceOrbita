import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useFetchProdutos } from "../../hooks/useFetchProdutos"
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { produtos, loading, error } = useFetchProdutos({ offset: 0, limit: 5 });
    const navigate = useNavigate();

    if (loading === true) return (<Loader2 />)

    if (error) return (navigate("/notFound"))

    if (!produtos) return (
        <div>
            <h2>Sem Produtos em destaque</h2>
        </div>
    )

    return (
        <>
            <Header />
            <main>
                <h1>Pagina Home</h1>
                <div>
                    banner
                </div>

                <div>
                    {produtos.map((p) => (
                        <div key={p.id}>
                            <div>
                                <img src={p.images} alt={p.slug} />
                            </div>
                            <div>
                                <h1>{p.title}</h1>
                                <h3>{p.category.name}</h3>
                                <button
                                    onClick={() => navigate(`/produto/${p.id}`)}
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}