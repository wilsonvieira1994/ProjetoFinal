import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../categoria-crud/categoria.module';
import { CategoriaService } from '../../categoria-crud/categoria.service';
import { Fornecedor } from '../../fornecedor-crud/fornecedor.module';
import { FornecedorService } from '../../fornecedor-crud/fornecedor.service';
import { GeralService } from '../../geral.service';
import { Marca } from '../../marca-crud/marca.module';
import { MarcaService } from '../../marca-crud/marca.service';
import { Produto } from '../produto.module';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-update',
  template: `
<mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Produto</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="produto.nome">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Descrição" name="descricao" [(ngModel)]="produto.descricao">
          </mat-form-field>

          <mat-form-field>
            <input matInput type="number" placeholder="Valor Unitário" name="valorUnitario" [(ngModel)]="produto.valorUnitario">
          </mat-form-field>

          <mat-form-field>
            <input matInput type="number" placeholder="Quantidade" name="quantidade" [(ngModel)]="produto.quantidade">
          </mat-form-field>

          <mat-form-field>
            <mat-label>Categoria</mat-label>
            <mat-select name="categoria_id" [(ngModel)]="produto.categoria.id">
                <mat-option *ngFor="let categoria of categorias" value="{{categoria.id}}">{{categoria.nome}}</mat-option>
            </mat-select>
        </mat-form-field>

        <mat-form-field>
            <mat-label>Marca</mat-label>
            <mat-select name="marca_id" [(ngModel)]="produto.marca.id">
                <mat-option *ngFor="let marca of marcas" value="{{marca.id}}">{{marca.nome}}</mat-option>
            </mat-select>
        </mat-form-field>

        <mat-form-field>
            <mat-label>Fornecedor</mat-label>
            <mat-select name="fornecedor_id" [(ngModel)]="produto.fornecedor.id">
                <mat-option *ngFor="let fornecedor of fornecedores" value="{{fornecedor.id}}">{{fornecedor.nome}}</mat-option>
            </mat-select>
        </mat-form-field>

        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="atualizarProduto()">
              Salvar
          </button>

          <button class="btn-vermelho" mat-raised-button (click)="cancelar()">
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
export class ProdutoUpdateComponent implements OnInit {

  produto: Produto
  categorias: Categoria[]
  marcas: Marca[]
  fornecedores: Fornecedor[]
  
  constructor(
    private geralService: GeralService,
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.lerPorId(id).subscribe(produto => {
      this.produto = produto
    })
    this.categoriaService.ler().subscribe(categorias => {
      this.categorias = categorias
    })
    this.marcaService.ler().subscribe(marcas => {
      this.marcas = marcas
    })
    this.fornecedorService.ler().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  atualizarProduto(): void {
    this.produtoService.atualizar(this.produto).subscribe(() => {
      this.geralService.snackBarMensagem(`O produto ${this.produto.nome} foi atualizado com sucesso!`)
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
