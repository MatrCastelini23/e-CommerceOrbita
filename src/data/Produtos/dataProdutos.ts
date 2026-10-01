export interface ICategoriaProdutos {
    name: string;
    title?: string;
    quantity?: number
}

export const QUANTIDADE_PADRAO = 20
export const MAX_CATEGORIAS = 5

export const categoriaProdutos: ICategoriaProdutos[] = [
    { name: "Electronics", title: "Eletronicos" },
    { name: "Shoes", title: "Calçados" },
    { name: "Furniture", title: "Móveis" },
    { name: "Miscellaneous", title: "Variedades" },
    { name: "New Category 3", title: "Outros" },
]