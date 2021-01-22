import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Fornecedor } from '../fornecedor.module';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
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
          <button class="btn-verde" mat-raised-button (click)="atualizarFornecedor()">
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
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: Fornecedor

  constructor(
    private geralService: GeralService,
    private router: Router,
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.fornecedorService.lerPorId(id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  atualizarFornecedor(): void {
    this.fornecedorService.atualizar(this.fornecedor).subscribe(() => {
      this.geralService.snackBarMensagem(`O fornecedor ${this.fornecedor.nome} foi atualizado com sucesso!`)
      this.router.navigate(['/fornecedores'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/fornecedores'])
  }

}
