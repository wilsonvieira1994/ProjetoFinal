import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Categoria } from '../categoria.module';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  template: `
    <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Categoria</mat-card-title>
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
          <button class="btn-verde" mat-raised-button (click)="atualizarCategoria()">
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
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria;

  constructor(
    private geralService: GeralService,
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriaService.lerPorId(id).subscribe(categoria => {
      this.categoria = categoria
    })
  }

  atualizarCategoria(): void {
    this.categoriaService.atualizar(this.categoria).subscribe(() => {
      this.geralService.snackBarMensagem(`A categoria ${this.categoria.nome} foi atualizada com sucesso!`)
      this.router.navigate(['/categorias'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }

}
