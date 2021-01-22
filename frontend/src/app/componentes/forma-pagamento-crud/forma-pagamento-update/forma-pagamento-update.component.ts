import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { FormaPagamento } from '../forma-pagamento.module';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-update',
  template: `
<mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Forma de Pagamento</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Forma" name="forma" [(ngModel)]="formaPagamento.forma">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Descrição" name="descricao" [(ngModel)]="formaPagamento.descricao">
          </mat-form-field>

          <mat-form-field>
          <mat-label>Ativa</mat-label>
            <mat-select name="ativo" [(ngModel)]="formaPagamento.ativo">
              <mat-option value="true">Sim</mat-option>
              <mat-option value="false">Não</mat-option>
            </mat-select>
          </mat-form-field>

        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="atualizarFormaPagamento()">
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
export class FormaPagamentoUpdateComponent implements OnInit {

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

  atualizarFormaPagamento(): void {
    this.formaPagamentoService.atualizar(this.formaPagamento).subscribe(() => {
      this.geralService.snackBarMensagem(`A forma de pagamento ${this.formaPagamento.forma} foi atualizada com sucesso!`)
      this.router.navigate(['/formaspagamento'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/formaspagamento'])
  }

}