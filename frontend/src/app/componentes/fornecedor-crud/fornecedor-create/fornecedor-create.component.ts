import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Fornecedor } from '../fornecedor.module';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  template: `
<mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Novo Fornecedor</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="fornecedor.nome">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Endereço" name="endereco" [(ngModel)]="fornecedor.endereco">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="CNPJ" name="cpnj" [(ngModel)]="fornecedor.cnpj">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="E-mail" name="email" [(ngModel)]="fornecedor.email">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Telefone" name="telefone" [(ngModel)]="fornecedor.telefone">
          </mat-form-field>
        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="criarFornecedor()">
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
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    nome: '',
    endereco: '',
    cnpj: '',
    email: '',
    telefone: ''
  }

  constructor(
    private geralService: GeralService,
    private router: Router,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
  }
  
  criarFornecedor(): void {
    this.fornecedorService.criar(this.fornecedor).subscribe(() => {
      this.geralService.snackBarMensagem(`O Fornecedor ${this.fornecedor.nome} foi cadastrado com sucesso!`)
      this.router.navigate(['/fornecedores'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/fornecedores'])
  }
}