import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca.module';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-read',
  template: `
    <div class="mat-elevation-z2">
      <table mat-table [dataSource]="marcas">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td mat-cell *matCellDef="let row">{{row.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="descricao">
          <th mat-header-cell *matHeaderCellDef>Descrição</th>
          <td mat-cell *matCellDef="let row">{{row.descricao}}</td>
        </ng-container>

        <ng-container matColumnDef="opcoes">
          <th mat-header-cell *matHeaderCellDef>Opções</th>
          <td mat-cell *matCellDef="let row">
            <a class="verde" routerLink="/marcas/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/marcas/delete/{{row.id}}">
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
export class MarcaReadComponent implements OnInit {

  marcas: Marca[]
  displayedColumns = ['id', 'nome', 'descricao', 'opcoes']

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.marcaService.ler().subscribe(marcas => {
      this.marcas = marcas
    })
  }

}
