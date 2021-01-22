import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { FormaPagamento } from '../forma-pagamento.module';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-delete',
  template: `
   <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Cliente</mat-card-title>
          <span>Forma: {{formaPagamento.forma}}</span>
          <br>
          <span>Descrição: {{formaPagamento.descricao}}</span>
          <br>
          <span>Ativa? 
          <span *ngIf="formaPagamento.ativo == true">Sim</span> 
          <span *ngIf="formaPagamento.ativo == false">Não</span> 
        </span>

        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarFormaPagamento()">
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
export class FormaPagamentoDeleteComponent implements OnInit {

  formaPagamento: FormaPagamento

  constructor(
    private geralService: GeralService,
    private router: Router,
    private formaPagamentoService: FormaPagamentoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formaPagamentoService.lerPorId(id).subscribe(formaPagamento => {
      this.formaPagamento = formaPagamento
    })
  }

  deletarFormaPagamento(): void {
    this.formaPagamentoService.deletar(`${this.formaPagamento.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`A forma de pagamento ${this.formaPagamento.forma} foi excluída com sucesso!`)
      this.router.navigate(['/formaspagamento'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/formaspagamento'])
  }
}
