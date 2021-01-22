import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.module';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  template: `
    <div class="mat-elevation-z2">
      <table mat-table [dataSource]="categorias">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td mat-cell *matCellDef="let row">{{row.nome}}</td>
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
            <a class="verde" routerLink="/categorias/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/categorias/delete/{{row.id}}">
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
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[]
  displayedColumns = ['id', 'nome', 'ativo', 'opcoes']

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.ler().subscribe(categorias => {
      this.categorias = categorias
    })
  }

}
