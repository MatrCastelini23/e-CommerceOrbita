import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useFetchProdutos } from "../../hooks/useFetchProdutos"
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/UiMessages/Loading";
import { Error } from "../../components/UiMessages/Error";

export const Home = () => {
    const { produtos, loading, error } = useFetchProdutos({ offset: 0, limit: 5 });
    const navigate = useNavigate();

    if (loading === true) return (<Loading />)

    if (error) return (<Error />)

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
                <Loading />
                <div className="">

                </div>

                <div className="">
                    {produtos.map((p) => (
                        <div key={p.id}>
                            <div className="">
                                <img
                                    src={p.images}
                                    alt={p.slug}
                                    className=""
                                />
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