import api from '@/services/api'
import { Categoria } from '@/interfaces/Categoria'

export async function buscarCategorias(): Promise<Categoria[]> {
    try {
        const resposta = await api.get<Categoria[]>('/categorias')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar as categorias.')
    }
}
