import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useFetchProduto } from "../../../hooks/useFetchProdutos"
import { Loading } from "../../../components/UiMessages/Loading";
import { Error } from "../../../components/UiMessages/Error";
import { useParams } from "react-router-dom";

export const Produto = () => {
    const { id } = useParams();
    const idNumber = Number(id);
    const { produto, loading, error } = useFetchProduto(idNumber);

    if (loading === true) return (<Loading />)

    if (error != null) return (<Error />)

    if (!produto) return (<div><h1>Produto indisponivel</h1></div>)

    return (
        <>
            <Header />
            <div style={{ width: "500px" }}>
                <img src={produto.images} alt={produto.slug} />
            </div>
            <div>
                <h1>{produto.title}</h1>
                <h3>R$ {produto.price}</h3>
                <p>{produto.description}</p>
            </div>
            <Footer />
        </>
    )
}