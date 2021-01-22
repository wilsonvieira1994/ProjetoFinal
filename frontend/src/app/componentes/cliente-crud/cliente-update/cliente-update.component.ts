import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  template: `
    <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Cliente</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="cliente.nome">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Nome Social" name="nomeSocial" [(ngModel)]="cliente.nomeSocial">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Apelido" name="apelido" [(ngModel)]="cliente.apelido">
          </mat-form-field>

          <mat-form-field>
            <input matInput type="date" placeholder="Data de Nascimento" name="dataNascimento" [(ngModel)]="cliente.dataNascimento">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Sexo" name="sexo" [(ngModel)]="cliente.sexo">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="CPF" name="cpf" [(ngModel)]="cliente.cpf">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="E-mail" name="email" [(ngModel)]="cliente.email">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Telefone" name="telefone" [(ngModel)]="cliente.telefone">
          </mat-form-field>
        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="atualizarCliente()">
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
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente

  constructor(
    private geralService: GeralService,
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.lerPorId(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  atualizarCliente(): void {
    this.clienteService.atualizar(this.cliente).subscribe(() => {
      this.geralService.snackBarMensagem(`O cliente ${this.cliente.nome} foi atualizado com sucesso!`)
      this.router.navigate(['/clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/clientes'])
  }

}
