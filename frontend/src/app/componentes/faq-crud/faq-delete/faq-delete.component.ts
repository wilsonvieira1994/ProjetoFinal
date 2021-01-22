import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Faq } from '../faq.module';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-delete',
  template: `
   <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Cliente</mat-card-title>
          <span>Texto: {{faq.texto}}</span>
          <br>
          <span>Produto: {{faq.produto.nome}}</span>
        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarFaq()">
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
export class FaqDeleteComponent implements OnInit {

  faq: Faq

  constructor(
    private geralService: GeralService,
    private router: Router,
    private faqService: FaqService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.faqService.lerPorId(id).subscribe(faq => {
      this.faq = faq
    })
  }

  deletarFaq(): void {
    this.faqService.deletar(`${this.faq.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`A faq foi excluída com sucesso!`)
      this.router.navigate(['/faq'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/faq'])
  }

}
