import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Categoria } from '../categoria.module';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  template: `
    <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Categoria</mat-card-title>
        <span>Nome: {{categoria.nome}}</span>
        <br>
        <span>Ativa? 
          <span *ngIf="categoria.ativo == true">Sim</span> 
          <span *ngIf="categoria.ativo == false">Não</span> 
        </span>
        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarCategoria()">
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
export class CategoriaDeleteComponent implements OnInit {
  
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
  
    deletarCategoria(): void {
      this.categoriaService.deletar(`${this.categoria.id}`).subscribe(() => {
        this.geralService.snackBarMensagem(`A categoria ${this.categoria.nome} foi excluída com sucesso!`)
        this.router.navigate(['/categorias'])
      })
    }
  
    cancelar(): void {
      this.router.navigate(['/categorias'])
    }

}
