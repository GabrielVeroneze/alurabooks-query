import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarCategoriaEspecifica } from '@/services/categorias'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import TituloPrincipal from '@/components/TituloPrincipal'
import styles from './Categoria.module.scss'

const Categoria = () => {
    const [categoria, setCategoria] = useState<CategoriaDados | null>(null)
    const params = useParams()

    useEffect(() => {
        if (params.slug) {
            buscarCategoriaEspecifica(params.slug).then(dados =>
                setCategoria(dados)
            )
        }
    }, [params])

    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>
    )
}

export default Categoria
