import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-delete',
  template: `
   <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Cliente</mat-card-title>
          <span>Nome: {{cliente.nome}}</span>
          <br>
          <span>Nome Social: {{cliente.nomeSocial}}</span>
          <br>
          <span>Apelido: {{cliente.apelido}}</span>
          <br>
          <span>Data de Nascimento: {{cliente.dataNascimento | date: 'dd/MM/yyyy'}}</span>
          <br>
          <span>Sexo: {{cliente.sexo}}</span>
          <br>
          <span>CPF: {{cliente.cpf}}</span>
          <br>
          <span>E-mail: {{cliente.email}}</span>
          <br>
          <span>Telefone: {{cliente.telefone}}</span>
        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarCliente()">
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
export class ClienteDeleteComponent implements OnInit {
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

  deletarCliente(): void {
    this.clienteService.deletar(`${this.cliente.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`O cliente ${this.cliente.nome} foi excluído com sucesso!`)
      this.router.navigate(['/clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/clientes'])
  }

}
