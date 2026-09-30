interface CardProdutosProps {
    image: string
    title: string
    price: number
    category: string
    onClick?: () => void
}

export const CardProdutos = (props: CardProdutosProps) => {
    return (
        <div
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-white transition-shadow hover:shadow-md"
        >
            <div className="aspect-square w-full overflow-hidden bg-stone-100">
                <img
                    src={props.image}
                    alt={props.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col gap-1 p-4">
                <h1 className="line-clamp-2 text-base font-semibold text-stone-900">{props.title}</h1>
                <h2 className="text-lg font-bold text-emerald-700">
                    {props.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </h2>
                <h3 className="mt-auto pt-2 text-sm text-stone-500">{props.category}</h3>
                <button
                    onClick={props.onClick}
                    className="cursor-pointer"
                >Ver detalhes</button>
            </div>
        </div>
    )
}