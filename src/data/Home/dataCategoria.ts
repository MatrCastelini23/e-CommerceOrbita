export interface ICategoriaHome {
    name: string;
    title?: string;
    quantity?: number
}

export const QUANTIDADE_PADRAO = 20
export const MAX_CATEGORIAS = 5

export const categoriaHome: ICategoriaHome[] = [
    { name: "Electronics", title: "Eletronicos" },
    { name: "Shoes", title: "Calçados" },
    { name: "Furniture", title: "Móveis" },
    { name: "Miscellaneous", title: "Variedades" },
    { name: "New Category 3", title: "Outros" },
]