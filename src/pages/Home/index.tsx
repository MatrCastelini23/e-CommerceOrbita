import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useFetchProdutos } from "../../hooks/useFetchProdutos"
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/UiMessages/Loading";
import { Error } from "../../components/UiMessages/Error";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CardProdutos } from "../../components/CardsProduto";
import { CarrosselProdutos } from "../../components/CarroselProdutos";
import { categoriaHome, MAX_CATEGORIAS, QUANTIDADE_PADRAO } from "../../data/Home/dataCategoria";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react"


const banners = [
    { id: 0, src: "/banner1.png", alt: "banner 1" },
    { id: 1, src: "/banner2.png", alt: "banner 2" },
]

export const Home = () => {
    const { produtos, loading, error } = useFetchProdutos({ offset: 0, limit: 100 });
    const [banner, setBanner] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setBanner((current) => (current + 1) % banners.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [banner]);

    const bannerAnterior = useCallback(() => {
        setBanner((current) => (current - 1 + banners.length) % banners.length)
    }, [banner])

    const proximoBanner = useCallback(() => {
        setBanner((current) => (current + 1) % banners.length);
    }, [banner])

    const primeiraImagem = (images: unknown): string => {
        if (Array.isArray(images)) return images[0] ?? "";
        return typeof images === "string" ? images : "";
    };

    const secoes = useMemo(() => {
        if (!produtos) return [];

        return categoriaHome
            .map(({ name, title, quantity }) => ({
                titulo: title ?? name,
                lista: produtos
                    .filter((p) => p.category.name === name)
                    .slice(0, quantity ?? QUANTIDADE_PADRAO),
            }))
            .filter((secao) => secao.lista.length > 0)
            .slice(0, MAX_CATEGORIAS);
    }, [produtos]);

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
            <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-10">
                <div className="relative w-full overflow-hidden">
                    <button
                        type="button"
                        aria-label="Próximo banner"
                        onClick={bannerAnterior}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-stone-800 shadow hover:bg-white"
                    >
                        <CircleChevronLeft />
                    </button>
                    <img
                        src={banners[banner].src}
                        alt={banners[banner].alt}
                        className="h-48 w-full object-cover sm:h-72 lg:h-96"
                    />
                    <button
                        type="button"
                        aria-label="Próximo banner"
                        onClick={proximoBanner}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-stone-800 shadow hover:bg-white"
                    >
                        <CircleChevronRight />
                    </button>
                </div>
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