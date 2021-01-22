import { Produto } from "../produto-crud/produto.module";
import { Venda } from "../venda-crud/venda.module";

export interface ItensVenda{
    id?: number
    quantidade: number
    valorUnitario: number
    produto: Produto
    venda: Venda
}
