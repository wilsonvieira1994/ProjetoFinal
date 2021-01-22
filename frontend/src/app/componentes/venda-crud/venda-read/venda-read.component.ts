import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venda } from '../venda.module';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-read',
  template: `
  <mat-card *ngFor="let venda of vendas">
      <div class="content">
        <mat-card-title class="centralizar-texto">Vendas</mat-card-title>
          <span>Valor total: {{venda.valorTotal}}</span>
          <br>
          <span>Data: {{venda.data_hora | date: 'dd/MM/yyyy'}}</span>
          <br>
          <span>Cliente: {{venda.cliente.nome}}</span>
          <br>
          <span>Forma de pagamento: {{venda.formaPagamento.forma}}</span>

          <div class="centralizar">
            <button routerLink="/vendas/delete/{{venda.id}}" class="btn-vermelho" mat-raised-button>
                Deletar
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
export class VendaReadComponent implements OnInit {

  vendas: Venda[]

  constructor(
    private vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.ler().subscribe(vendas => {
      this.vendas = vendas
    })
  }

}
