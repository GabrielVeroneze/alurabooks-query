import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { buscarCategoriaEspecifica } from '@/services/categorias'
import TituloPrincipal from '@/components/TituloPrincipal'
import Loader from '@/components/Loader'
import styles from './Categoria.module.scss'

const Categoria = () => {
    const params = useParams()

    const { data: categoria, isLoading } = useQuery({
        queryKey: ['categoria'],
        queryFn: () => buscarCategoriaEspecifica(params.slug || ''),
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>
    )
}

export default Categoria
