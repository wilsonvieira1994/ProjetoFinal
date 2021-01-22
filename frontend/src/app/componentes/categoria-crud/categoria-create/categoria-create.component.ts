import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Categoria } from '../categoria.module';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  template: `
  <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Nova Categoria</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="categoria.nome">
          </mat-form-field>

          <mat-form-field>
          <mat-label>Ativa</mat-label>
            <mat-select name="ativo" [(ngModel)]="categoria.ativo">
              <mat-option value="true">Sim</mat-option>
              <mat-option value="false">Não</mat-option>
            </mat-select>
          </mat-form-field>

        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="criarCategoria()">
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
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    ativo: null
  }

  constructor(
    private geralService: GeralService,
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
  }

  criarCategoria(): void {
    this.categoriaService.criar(this.categoria).subscribe(() => {
      this.geralService.snackBarMensagem(`A categoria ${this.categoria.nome} foi cadastrada com sucesso!`)
      this.router.navigate(['/categorias'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }

}
