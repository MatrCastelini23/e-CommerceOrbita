import { useEffect, useState } from "react"


const BASE_URL = import.meta.env.VITE_URL_PRODUTOS;

interface ICategoryProduto {
    id: number,
    name: string,
    image: string,
}

interface IProduto {
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category: ICategoryProduto,
    images: string
}

interface IUseFetchProdutosResult {
    produtos: IProduto[] | null,
    loading: boolean,
    error: unknown,
}

interface IUseFetchProdutoResult {
    produto: IProduto | null,
    loading: boolean,
    error: unknown,
}

interface IUseFetchProdutosProps {
    offset: number,
    limit: number,
}

export function useFetchProdutos(props: IUseFetchProdutosProps): IUseFetchProdutosResult {
    const [produtos, setProdutos] = useState<IProduto[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/products?offset=${props.offset}&limit=${props.limit}`)
            .then(res => {
                if (!res.ok) throw new Error(`Erro na API ${res.status}`)
                return res.json();
            })
            .then(data => { setProdutos(data); setLoading(false) })
            .catch(err => { setError(err); setLoading(false) })
    }, [props.offset, props.limit])

    return { produtos, loading, error }
}

export function useFetchProduto(id: number): IUseFetchProdutoResult {
    const [produto, setProduto] = useState<IProduto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(`Produto não encontrado ${res.status}`)
                return res.json();
            })
            .then(data => { setProduto(data); setLoading(false) })
            .catch(err => { setError(err); setLoading(false) })
    }, [id])

    return { produto, loading, error };
}