import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Produto } from '../produto.module';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-delete',
  template: `
    <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Produto</mat-card-title>
        <span>Nome: {{produto.nome}}</span>
        <br>
        <span>Descrição: {{produto.descricao}}</span>
        <br>
        <span>Valor Unitário: {{produto.valorUnitario}}</span>
        <br>
        <span>Quantidade: {{produto.quantidade}}</span>
        <br>
        <span>Categoria: {{produto.categoria.nome}}</span>
        <br>
        <span>Marca: {{produto.marca.nome}}</span>
        <br>
        <span>Fornecedor: {{produto.fornecedor.nome}}</span>

        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarProduto()">
              Deletar
          </button>

          <button mat-raised-button (click)="cancelar()">
              Cancelar
          </button>
        </div>
      </div>
  </mat-card>
  `,
  styles: [`
  button {
    margin-left: 1%;
  }
  `]
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto

  constructor(
    private geralService: GeralService,
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.lerPorId(id).subscribe(produto => {
      this.produto = produto
    })
  }

  deletarProduto(): void {
    this.produtoService.deletar(`${this.produto.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`O produto ${this.produto.nome} foi excluído com sucesso!`)
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
