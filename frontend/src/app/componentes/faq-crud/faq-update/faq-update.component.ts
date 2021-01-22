import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Produto } from '../../produto-crud/produto.module';
import { ProdutoService } from '../../produto-crud/produto.service';
import { Faq } from '../faq.module';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-update',
  template: `
   <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Faq</mat-card-title>
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
          <button class="btn-verde" mat-raised-button (click)="atualizarFaq()">
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
export class FaqUpdateComponent implements OnInit {

  faq: Faq

  produtos: Produto[]

  constructor(
    private geralService: GeralService,
    private router: Router,
    private faqService: FaqService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.faqService.lerPorId(id).subscribe(faq => {
      this.faq = faq
    })
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  atualizarFaq(): void {
    this.faqService.atualizar(this.faq).subscribe(() => {
      this.geralService.snackBarMensagem(`A faq foi atualizada com sucesso!`)
      this.router.navigate(['/faq'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/faq'])
  }

}