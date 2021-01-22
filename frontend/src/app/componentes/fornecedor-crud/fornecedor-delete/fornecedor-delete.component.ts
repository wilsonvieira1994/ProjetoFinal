import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Fornecedor } from '../fornecedor.module';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-delete',
  template: `
   <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Fornecedor</mat-card-title>
          <span>Nome: {{fornecedor.nome}}</span>
          <br>
          <span>Endereço: {{fornecedor.endereco}}</span>
          <br>
          <span>CNPJ: {{fornecedor.cnpj}}</span>
          <br>
          <span>E-mail: {{fornecedor.email}}</span>
          <br>
          <span>Telefone: {{fornecedor.telefone}}</span>
        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarFornecedor()">
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
export class FornecedorDeleteComponent implements OnInit {
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

  deletarFornecedor(): void {
    this.fornecedorService.deletar(`${this.fornecedor.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`O fornecedor ${this.fornecedor.nome} foi excluído com sucesso!`)
      this.router.navigate(['/fornecedores'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/fornecedores'])
  }

}
