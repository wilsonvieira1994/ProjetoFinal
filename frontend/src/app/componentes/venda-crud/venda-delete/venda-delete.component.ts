import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Venda } from '../venda.module';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-delete',
  template: `
   <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Venda</mat-card-title>
        <span>Valor total: {{venda.valorTotal}}</span>
        <br>
        <span>Data: {{venda.data_hora | date: 'dd/MM/yyyy'}}</span>
        <br>
        <span>Cliente: {{venda.cliente.nome}}</span>
        <br>
        <span>Forma de pagamento: {{venda.formaPagamento.forma}}</span>

        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarVenda()">
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
export class VendaDeleteComponent implements OnInit {

  venda: Venda

  constructor(
    private geralService: GeralService,
    private router: Router,
    private vendaService: VendaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.vendaService.lerPorId(id).subscribe(venda => {
      this.venda = venda
    })
  }

  deletarVenda(): void {
    this.vendaService.deletar(`${this.venda.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`A compra que foi feita pelo cliente ${this.venda.cliente.nome} foi excluída com sucesso!`)
      this.router.navigate(['/vendas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/vendas'])
  }

}
