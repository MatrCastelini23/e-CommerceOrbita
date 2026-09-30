import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useFetchProdutos } from "../../hooks/useFetchProdutos"
import { Loading } from "../../components/UiMessages/Loading";
import { Error } from "../../components/UiMessages/Error";
import { useNavigate } from "react-router-dom";
import { CardProdutos } from "../../components/CardsProduto";

export const Produtos = () => {
    const { produtos, loading, error } = useFetchProdutos({ offset: 1, limit: 10 });
    const navigate = useNavigate();
    if (loading === true) return <Loading />

    if (error) return <Error />

    if (!produtos) return (
        <div>
            <h2>Sem produtos</h2>
        </div>
    )
    return (
        <>
            <Header />
            <main>
                <div>
                    {produtos.map((p) => (
                        <CardProdutos
                            image={p.images}
                            title={p.title}
                            price={p.price}
                            category={p.category.name}
                            onClick={() => navigate(`/produto/${p.id}`)}
                        />

                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}