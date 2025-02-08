import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarCategoriaEspecifica } from '@/services/categorias'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import TituloPrincipal from '@/components/TituloPrincipal'
import Loader from '@/components/Loader'
import styles from './Categoria.module.scss'

const Categoria = () => {
    const [categoria, setCategoria] = useState<CategoriaDados | null>(null)
    const [estaCarregando, setEstaCarregando] = useState<boolean>(true)
    const params = useParams()

    useEffect(() => {
        if (params.slug) {
            setEstaCarregando(true)

            buscarCategoriaEspecifica(params.slug)
                .then(dados => {
                    setCategoria(dados)
                    setEstaCarregando(false)
                })
                .catch(erro => {
                    console.log(erro)
                    setEstaCarregando(false)
                })
        }
    }, [params])

    if (estaCarregando) {
        return <Loader />
    }

    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>
    )
}

export default Categoria
