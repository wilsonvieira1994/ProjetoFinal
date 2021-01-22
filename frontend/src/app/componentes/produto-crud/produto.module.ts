import { Categoria } from "../categoria-crud/categoria.module";
import { Fornecedor } from "../fornecedor-crud/fornecedor.module";
import { Marca } from "../marca-crud/marca.module";

export interface Produto{
    id?: number
    nome: string
    descricao: string
    valorUnitario: number
    quantidade: number
    categoria: Categoria
    marca: Marca
    fornecedor: Fornecedor
}