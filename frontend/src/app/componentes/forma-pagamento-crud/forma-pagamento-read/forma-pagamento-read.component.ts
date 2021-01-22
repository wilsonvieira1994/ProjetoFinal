import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.module';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  template: `
  <div class="mat-elevation-z2">
      <table mat-table [dataSource]="formasPagamento">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="forma">
          <th mat-header-cell *matHeaderCellDef>Forma</th>
          <td mat-cell *matCellDef="let row">{{row.forma}}</td>
        </ng-container>

        <ng-container matColumnDef="descricao">
          <th mat-header-cell *matHeaderCellDef>Descrição</th>
          <td mat-cell *matCellDef="let row">{{row.descricao}}</td>
        </ng-container>

        <ng-container matColumnDef="ativo">
          <th mat-header-cell *matHeaderCellDef>Ativa</th>
          <td mat-cell *matCellDef="let row"> 
            <span *ngIf="row.ativo == true">Sim</span>
            <span *ngIf="row.ativo == false">Não</span>
          </td>
        </ng-container>
        
        <ng-container matColumnDef="opcoes">
          <th mat-header-cell *matHeaderCellDef>Opções</th>
          <td mat-cell *matCellDef="let row">
            <a class="verde" routerLink="/formaspagamento/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/formaspagamento/delete/{{row.id}}">
              Deletar
            </a>
          </td>
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
export class FormaPagamentoReadComponent implements OnInit {

  formasPagamento: FormaPagamento[]
  displayedColumns = ['id', 'forma', 'descricao', 'ativo', 'opcoes']

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.ler().subscribe(formasPagamento => {
      this.formasPagamento = formasPagamento
    })
  }

}
