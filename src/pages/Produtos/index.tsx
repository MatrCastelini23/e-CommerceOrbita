import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useFetchProdutos } from "../../hooks/useFetchProdutos"
import { Loading } from "../../components/UiMessages/Loading";
import { Error } from "../../components/UiMessages/Error";
import { useNavigate } from "react-router-dom";
import { CardProdutos } from "../../components/CardsProduto";
import { useMemo } from "react";
import { categoriaProdutos, MAX_CATEGORIAS, QUANTIDADE_PADRAO } from "../../data/Produtos/dataProdutos";
import { CarrosselProdutos } from "../../components/CarroselProdutos";
import { FunnelPlus } from "lucide-react";

export const Produtos = () => {
    const { produtos, loading, error } = useFetchProdutos({ offset: 1, limit: 100 });
    const navigate = useNavigate();

    const primeiraImagem = (images: unknown): string => {
        if (Array.isArray(images)) return images[0] ?? "";
        return typeof images === "string" ? images : "";
    };

    const secoes = useMemo(() => {
        if (!produtos) return [];

        return categoriaProdutos
            .map(({ name, title, quantity }) => ({
                titulo: title ?? name,
                lista: produtos
                    .filter((p) => p.category.name === name)
                    .slice(0, quantity ?? QUANTIDADE_PADRAO),
            }))
            .filter((secao) => secao.lista.length > 0)
            .slice(0, MAX_CATEGORIAS);
    }, [produtos]);

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
            <div>
                <button
                    aria-label="Filtro de Busca"
                    className="absolute right-60"
                >
                    <FunnelPlus />
                </button>
                <input
                    type="text"
                    placeholder="O que você está buscando?"
                    className="absolute right-1"
                />
            </div>
            <div className="mx-auto w-full max-w-8xl space-y-12 px-4 py-20">
                {secoes.map(({ titulo, lista }) => (
                    <section key={titulo} aria-label={titulo}>
                        <div className="mb-4 flex items-baseline justify-between border-b border-stone-200 pb-2">
                            <h2 className="text-2xl font-bold text-stone-900">{titulo}</h2>
                        </div>
                        <CarrosselProdutos>
                            {lista.map((p) => (
                                <div key={p.id} className="min-w-0 shrink-0 basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/5">
                                    <CardProdutos
                                        key={p.id}
                                        image={primeiraImagem(p.images)}
                                        title={p.title}
                                        price={p.price}
                                        category={p.category.name}
                                        onClick={() => navigate(`/produto/${p.id}`)}
                                    />
                                </div>
                            ))}
                        </CarrosselProdutos>
                    </section>
                ))}
            </div>
            <Footer />
        </>
    )
}