import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.module';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  template: `
  <div class="mat-elevation-z2">
      <table mat-table [dataSource]="fornecedores">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td mat-cell *matCellDef="let row">{{row.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="endereco">
          <th mat-header-cell *matHeaderCellDef>Endereço</th>
          <td mat-cell *matCellDef="let row">{{row.endereco}}</td>
        </ng-container>

        <ng-container matColumnDef="cnpj">
          <th mat-header-cell *matHeaderCellDef>CNPJ</th>
          <td mat-cell *matCellDef="let row">{{row.cnpj}}</td>
        </ng-container>

        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef>E-mail</th>
          <td mat-cell *matCellDef="let row">{{row.email}}</td>
        </ng-container>

        <ng-container matColumnDef="telefone">
          <th mat-header-cell *matHeaderCellDef>Telefone</th>
          <td mat-cell *matCellDef="let row">{{row.telefone}}</td>
        </ng-container>

        <ng-container matColumnDef="opcoes">
          <th mat-header-cell *matHeaderCellDef>Opções</th>
          <td mat-cell *matCellDef="let row">
            <a class="verde" routerLink="/fornecedores/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/fornecedores/delete/{{row.id}}">
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
export class FornecedorReadComponent implements OnInit {

  fornecedores: Fornecedor[]
  displayedColumns = ['id', 'nome', 'endereco', 'cnpj', 'email', 'telefone', 'opcoes']

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.ler().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

}
