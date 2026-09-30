import useEmblaCarousel from "embla-carousel-react";
import type { ReactNode } from "react";

export const CarrosselProdutos = ({ children }: { children: ReactNode }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: "auto", // avança todos os cards visíveis de uma vez
    });

    const classeBotao =
        "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-xl text-stone-700 shadow hover:bg-stone-50 md:flex";

    return (
        <div className="relative">
            <button
                type="button"
                aria-label="Produtos anteriores"
                onClick={() => emblaApi?.scrollPrev()}
                className={`${classeBotao} -left-4`}
            >
                ‹
            </button>

            <div ref={emblaRef} className="overflow-hidden">
                <div className="-ml-4 flex">{children}</div>
            </div>

            <button
                type="button"
                aria-label="Próximos produtos"
                onClick={() => emblaApi?.scrollNext()}
                className={`${classeBotao} -right-4`}
            >
                ›
            </button>
        </div>
    )
}