import { Cliente } from "../cliente-crud/cliente.module";
import { FormaPagamento } from "../forma-pagamento-crud/forma-pagamento.module";

export interface Venda{
    id?: number
    valorTotal: number
    data_hora: Date
    cliente: Cliente
    formaPagamento: FormaPagamento
}