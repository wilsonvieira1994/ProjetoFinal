import { Produto } from "../produto-crud/produto.module";

export interface Faq{
    id?: number
    texto: string
    data_hora: Date
    produto: Produto
}
