import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq.module';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-read',
  template: `
<div class="mat-elevation-z2">
      <table mat-table [dataSource]="faqs">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="texto">
          <th mat-header-cell *matHeaderCellDef>Texto</th>
          <td mat-cell *matCellDef="let row">{{row.texto}}</td>
        </ng-container>

        <ng-container matColumnDef="data_hora">
          <th mat-header-cell *matHeaderCellDef>Data do cadastro</th>
          <td mat-cell *matCellDef="let row">{{row.data_hora | date: 'dd/MM/yyyy'}}</td>
        </ng-container>

        <ng-container matColumnDef="produto">
          <th mat-header-cell *matHeaderCellDef>Produto</th>
          <td mat-cell *matCellDef="let row">{{row.produto.nome}}</td>
        </ng-container>
        
        <ng-container matColumnDef="opcoes">
          <th mat-header-cell *matHeaderCellDef>Opções</th>
          <td mat-cell *matCellDef="let row">
            <a class="verde" routerLink="/faq/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/faq/delete/{{row.id}}">
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
export class FaqReadComponent implements OnInit {

  faqs: Faq[]
  displayedColumns = ['id', 'texto', 'data_hora', 'produto', 'opcoes']

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqService.ler().subscribe(faqs => {
      this.faqs = faqs
    })
  }

}
