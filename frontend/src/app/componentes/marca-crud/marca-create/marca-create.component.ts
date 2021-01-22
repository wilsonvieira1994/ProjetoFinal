import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Marca } from '../marca.module';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-create',
  template: `
  <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Nova Marca</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="marca.nome">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Descrição" name="descricao" [(ngModel)]="marca.descricao">
          </mat-form-field>
        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="criarMarca()">
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
export class MarcaCreateComponent implements OnInit {

  marca: Marca = {
    nome: '',
    descricao: ''
  }

  constructor(
    private geralService: GeralService,
    private router: Router,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
  }

  criarMarca(): void {
    this.marcaService.criar(this.marca).subscribe(() => {
      this.geralService.snackBarMensagem(`A marca ${this.marca.nome} foi cadastrada com sucesso!`)
      this.router.navigate(['/marcas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }

}
