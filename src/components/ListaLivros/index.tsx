import { useQuery } from '@tanstack/react-query'
import { buscarLivrosPorCategoria } from '@/services/livros'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import CardLivro from '@/components/CardLivro'

interface ListaLivrosProps {
    categoria: CategoriaDados
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const { data: livros } = useQuery({
        queryKey: ['livrosPorCategoria', categoria],
        queryFn: () => buscarLivrosPorCategoria(categoria),
    })

    return (
        <>
            {livros?.map(livro => (
                <CardLivro key={livro.id} livro={livro} />
            ))}
        </>
    )
}

export default ListaLivros
