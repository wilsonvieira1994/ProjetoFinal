import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Produto } from '../../produto-crud/produto.module';
import { ProdutoService } from '../../produto-crud/produto.service';
import { Faq } from '../faq.module';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-create',
  template: `
<mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Nova Faq</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Texto" name="texto" [(ngModel)]="faq.texto">
          </mat-form-field>

          <mat-form-field>
            <mat-label>Produto</mat-label>
            <mat-select name="produto_id" [(ngModel)]="faq.produto.id">
                <mat-option *ngFor="let produto of produtos" value="{{produto.id}}">{{produto.nome}}</mat-option>
            </mat-select>
        </mat-form-field>

        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="criarFaq()">
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
export class FaqCreateComponent implements OnInit {

  faq: Faq = {
    texto: '',
    data_hora: new Date(),
    produto:{
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
  }
  produtos: Produto[]

  constructor(
    private geralService: GeralService,
    private router: Router,
    private faqService: FaqService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  criarFaq(): void {
    this.faqService.criar(this.faq).subscribe(() => {
      this.geralService.snackBarMensagem(`A faq foi cadastrada com sucesso!`)
      this.router.navigate(['/faq'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/faq'])
  }

}
