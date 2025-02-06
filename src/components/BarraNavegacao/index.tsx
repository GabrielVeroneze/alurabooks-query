import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { limparToken, obterToken } from '@/utils/token'
import ModalLoginUsuario from '@/components/ModalLoginUsuario'
import ModalCadastroUsuario from '@/components/ModalCadastroUsuario'
import ContaNavegacao from './ContaNavegacao'
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import styles from './BarraNavegacao.module.scss'

const BarraNavegacao = () => {
    const [modalLoginAberta, setModalLoginAberta] = useState<boolean>(false)
    const [modalCadastroAberta, setModalCadastroAberta] = useState<boolean>(false)

    const navigate = useNavigate()
    const token = obterToken()

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token !== null)

    const aoEfetuarLogin = () => {
        setModalLoginAberta(false)
        setUsuarioEstaLogado(true)
    }

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        limparToken()
        navigate('/')
    }

    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">
                    <img src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <div className={styles.navegacao}>
                <h4 className={styles.titulo}>Categorias</h4>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Frontend
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Programação
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Business
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={styles.usuario}>
                {!usuarioEstaLogado && (
                    <>
                        <li>
                            <ContaNavegacao
                                texto="Login"
                                imagem={usuario}
                                imagemAlt="Icone representando um usuário"
                                onClick={() => setModalLoginAberta(true)}
                            />
                            <ModalLoginUsuario
                                aberta={modalLoginAberta}
                                aoFechar={() => setModalLoginAberta(false)}
                                aoEfetuarLogin={aoEfetuarLogin}
                            />
                        </li>
                        <li>
                            <ContaNavegacao
                                texto="Cadastrar-se"
                                imagem={usuario}
                                imagemAlt="Icone representando um usuário"
                                onClick={() => setModalCadastroAberta(true)}
                            />
                            <ModalCadastroUsuario
                                aberta={modalCadastroAberta}
                                aoFechar={() => setModalCadastroAberta(false)}
                            />
                        </li>
                    </>
                )}
                {usuarioEstaLogado && (
                    <>
                        <li>
                            <Link className={styles.conta} to="/minha-conta/pedidos">
                                Minha conta
                            </Link>
                        </li>
                        <li>
                            <ContaNavegacao
                                texto="Logout"
                                imagem={usuario}
                                imagemAlt="Icone representando um usuário"
                                onClick={efetuarLogout}
                            />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default BarraNavegacao
