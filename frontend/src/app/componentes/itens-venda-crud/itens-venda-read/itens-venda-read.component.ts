import { Component, OnInit } from '@angular/core';
import { ItensVenda } from '../itens-venda.module';
import { ItensVendaService } from '../itens-venda.service';

@Component({
  selector: 'app-itens-venda-read',
  template: `
<div class="mat-elevation-z2">
      <table mat-table [dataSource]="itensVenda">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="quantidade">
          <th mat-header-cell *matHeaderCellDef>Quantidade</th>
          <td mat-cell *matCellDef="let row">{{row.quantidade}}</td>
        </ng-container>

        <ng-container matColumnDef="valorUnitario">
          <th mat-header-cell *matHeaderCellDef>Valor Unitário</th>
          <td mat-cell *matCellDef="let row">{{row.valorUnitario}}</td>
        </ng-container>

        <ng-container matColumnDef="produto">
          <th mat-header-cell *matHeaderCellDef>Produto</th>
          <td mat-cell *matCellDef="let row">{{row.produto.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="venda">
          <th mat-header-cell *matHeaderCellDef>Venda</th>
          <td mat-cell *matCellDef="let row">{{row.venda.id}}</td>
        </ng-container>
    
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

    </div>
  `,
  styles: [`
  div {
    margin: 20px; 
  }
  table{
    width: 100%;
  }
`]
})
export class ItensVendaReadComponent implements OnInit {

  itensVenda: ItensVenda[]
  displayedColumns = ['id', 'quantidade', 'valorUnitario', 'produto', 'venda']
  constructor(private itensVendaService: ItensVendaService) { }

  ngOnInit(): void {
    this.itensVendaService.ler().subscribe(itensVenda => {
      this.itensVenda = itensVenda
    })
  }

}
