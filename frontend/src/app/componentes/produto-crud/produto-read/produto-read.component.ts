import { Component, OnInit } from '@angular/core';
import { ItensVenda } from '../../itens-venda-crud/itens-venda.module';
import { ItensVendaService } from '../../itens-venda-crud/itens-venda.service';
import { Venda } from '../../venda-crud/venda.module';
import { VendaService } from '../../venda-crud/venda.service';
import { Produto } from '../produto.module';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  template: `
<div class="mat-elevation-z2">
      <table mat-table [dataSource]="produtos">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td mat-cell *matCellDef="let row">{{row.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="descricao">
          <th mat-header-cell *matHeaderCellDef>Descrição</th>
          <td mat-cell *matCellDef="let row">{{row.descricao}}</td>
        </ng-container>

        <ng-container matColumnDef="valorUnitario">
          <th mat-header-cell *matHeaderCellDef>Valor unitário</th>
          <td mat-cell *matCellDef="let row">{{row.valorUnitario}}</td>
        </ng-container>

        <ng-container matColumnDef="quantidade">
          <th mat-header-cell *matHeaderCellDef>Quantidade</th>
          <td mat-cell *matCellDef="let row">{{row.quantidade}}</td>
        </ng-container>

        <ng-container matColumnDef="categoria">
          <th mat-header-cell *matHeaderCellDef>Categoria</th>
          <td mat-cell *matCellDef="let row">{{row.categoria.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="marca">
          <th mat-header-cell *matHeaderCellDef>Marca</th>
          <td mat-cell *matCellDef="let row">{{row.marca.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="fornecedor">
          <th mat-header-cell *matHeaderCellDef>Fornecedor</th>
          <td mat-cell *matCellDef="let row">{{row.fornecedor.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="opcoes">
          <th mat-header-cell *matHeaderCellDef>Opções</th>
          <td mat-cell *matCellDef="let row">
            <a class="verde" routerLink="/produtos/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/produtos/delete/{{row.id}}">
              Deletar
            </a>
            <a routerLink="/produtos" (click)="adicionarCarrinho(row)">
              Adicionar ao carrinho
            </a>
          </td>
        </ng-container>
    
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>

      <button mat-raised-button color="primary" class="pedido" (click)="fazerPedido()">
      Fazer pedido
    </button>
  `,
  styles: [`
    div {
      margin: 20px; 
    }
    table{
      width: 100%;
    }
    .pedido{
      margin-left: 10px;
    }
    .carrinho{
      margin-bottom: 20px;
    }
  `]
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id', 'nome', 'descricao', 'valorUnitario', 'quantidade', 'categoria', 'marca', 'fornecedor', 'opcoes']

  produtosCarrinho = new Map<number, Produto>()

  venda: Venda = {
    id: null,
    valorTotal: 0,
    data_hora: new Date(),
    cliente: {
    id: 1,
    nome: 'Jane Doe',
    nomeSocial: 'Jane Doe',
    apelido: 'Jane Doe',
    dataNascimento: '1970-01-01',
    sexo: 'Feminino',
    cpf: '123.456.789-01',
    email: 'janedoe@janedoe.com',
    telefone: '(81) 9 9999-9999'
    },
    formaPagamento: {
      id: 1,
      ativo: true,
      descricao: 'Parcelamento em até 12x sem juros',
      forma: 'Cartão de crédito' 
    }
  }

  itemVenda: ItensVenda = {
    id: null,
    valorUnitario: null,
    quantidade: 1,
    produto: null,
    venda: this.venda
  }

  constructor(
    private produtoService: ProdutoService, 
    private itensVendaService: ItensVendaService, 
    private vendaService: VendaService) { }

  ngOnInit(): void {
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  adicionarCarrinho(produto: Produto){
    this.produtosCarrinho.set(produto.id, produto)
  }

  fazerPedido(): void {
    this.vendaService.criar(this.venda).subscribe(Response => {
      for (let [id, produto] of this.produtosCarrinho) {
        this.itemVenda.venda.id = Response.id
        this.itemVenda.valorUnitario = this.itemVenda.quantidade * this.produtosCarrinho.get(id).valorUnitario
        this.itemVenda.produto = produto
        this.itensVendaService.criar(this.itemVenda).subscribe(() => {})
      }
    })
  }
  
}
