import { useState } from 'react'
import { AbBotao, AbCard } from 'ds-alurabooks'
import { Livro } from '@/interfaces/Livro'
import styles from './LivrosDestaque.module.scss'

interface LivrosDestaqueProps {
    livros: Livro[]
}

const LivrosDestaque = ({ livros }: LivrosDestaqueProps) => {
    const [selecionado, selecionarLivro] = useState<Livro>(livros[0])

    return (
        <section className={styles.destaque}>
            <ul className={styles.livros}>
                {livros.map((livro) => (
                    <li
                        key={livro.nome}
                        onClick={() => selecionarLivro(livro)}
                        className={`
                            ${styles.livro}
                            ${
                                selecionado.nome === livro.nome
                                    ? styles.selecionado
                                    : ''
                            }
                        `}
                    >
                        <img
                            className={styles.imagem}
                            src={livro.imagem}
                            alt={`Capa do livro ${livro.nome} escrito por ${livro.autor}`}
                        />
                    </li>
                ))}
            </ul>
            <AbCard>
                <div className={styles.detalhes}>
                    <header>
                        <h5 className={styles.titulo}>Sobre o livro:</h5>
                    </header>
                    <h6 className={styles.nome}>{selecionado.nome}</h6>
                    <p className={styles.info}>{selecionado.descricao}</p>
                    <p className={styles.info}>Por: {selecionado.autor}</p>
                    <footer className={styles.rodape}>
                        <div className={styles.preco}>
                            <em>A partir de:</em>
                            <strong>
                                {Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(selecionado.preco)}
                            </strong>
                        </div>
                        <div className={styles.botao}>
                            <AbBotao texto="Comprar" />
                        </div>
                    </footer>
                </div>
            </AbCard>
        </section>
    )
}

export default LivrosDestaque
