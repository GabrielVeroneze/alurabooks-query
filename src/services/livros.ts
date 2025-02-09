import api from '@/services/api'
import { Livro } from '@/interfaces/Livro'

export async function buscarLivrosLancamentos(): Promise<Livro[]> {
    try {
        const resposta = await api.get<Livro[]>('/public/lancamentos')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os lançamentos de livros.')
    }
}

export async function buscarLivrosMaisVendidos(): Promise<Livro[]> {
    try {
        const resposta = await api.get<Livro[]>('/public/mais-vendidos')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar a lista de livros mais vendidos.')
    }
}
