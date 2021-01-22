import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  template: `
  <div class="mat-elevation-z2">
      <table mat-table [dataSource]="clientes">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td mat-cell *matCellDef="let row">{{row.nome}}</td>
        </ng-container>

        <ng-container matColumnDef="nomeSocial">
          <th mat-header-cell *matHeaderCellDef>Nome Social</th>
          <td mat-cell *matCellDef="let row">{{row.nomeSocial}}</td>
        </ng-container>

        <ng-container matColumnDef="apelido">
          <th mat-header-cell *matHeaderCellDef>Apelido</th>
          <td mat-cell *matCellDef="let row">{{row.apelido}}</td>
        </ng-container>

        <ng-container matColumnDef="dataNascimento">
          <th mat-header-cell *matHeaderCellDef>Data de Nascimento</th>
          <td mat-cell *matCellDef="let row">{{row.dataNascimento | date: 'dd/MM/yyyy'}}</td>
        </ng-container>

        <ng-container matColumnDef="sexo">
          <th mat-header-cell *matHeaderCellDef>Sexo</th>
          <td mat-cell *matCellDef="let row">{{row.sexo}}</td>
        </ng-container>

        <ng-container matColumnDef="cpf">
          <th mat-header-cell *matHeaderCellDef>CPF</th>
          <td mat-cell *matCellDef="let row">{{row.cpf}}</td>
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
            <a class="verde" routerLink="/clientes/update/{{row.id}}">
              Editar
            </a>
            <a class="vermelho" routerLink="/clientes/delete/{{row.id}}">
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
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]
  displayedColumns = ['id', 'nome', 'nomeSocial', 'apelido', 'dataNascimento', 'sexo', 'cpf', 'email', 'telefone', 'opcoes']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.ler().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
