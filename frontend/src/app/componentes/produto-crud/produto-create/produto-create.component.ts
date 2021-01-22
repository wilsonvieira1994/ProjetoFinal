import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-produto-create',
  template: `
  <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Novo Produto</mat-card-title>
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
          <button class="btn-verde" mat-raised-button (click)="criarProduto()">
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
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    valorUnitario: null,
    quantidade: null,
    categoria: {
      nome: '',
      ativo: null
    },
    marca: {
      nome: '',
      descricao: ''
    },
    fornecedor: {
      nome: '',
      endereco: '',
      cnpj: '',
      email: '',
      telefone: ''
    }
  }
  
  categorias: Categoria[]
  marcas: Marca[]
  fornecedores: Fornecedor[]
  constructor(
    private geralService: GeralService,
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
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

  criarProduto(): void {
    this.produtoService.criar(this.produto).subscribe(() => {
      this.geralService.snackBarMensagem(`O produto ${this.produto.nome} foi cadastrado com sucesso!`)
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
