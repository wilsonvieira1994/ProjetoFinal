import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Marca } from '../marca.module';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-update',
  template: `
  <mat-card class="content">
    <div class="content">
      <mat-card-title class="centralizar-texto">Atualizar Marca</mat-card-title>
        <form>
          <mat-form-field>
            <input matInput placeholder="Nome" name="nome" [(ngModel)]="marca.nome">
          </mat-form-field>

          <mat-form-field>
            <input matInput placeholder="Descrição" name="descricao" [(ngModel)]="marca.descricao">
          </mat-form-field>
        </form>

        <div class="centralizar">
          <button class="btn-verde" mat-raised-button (click)="atualizarMarca()">
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
export class MarcaUpdateComponent implements OnInit {

  marca: Marca

  constructor(
    private geralService: GeralService,
    private router: Router,
    private marcaService: MarcaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.marcaService.lerPorId(id).subscribe(marca => {
      this.marca = marca
    })
  }

  atualizarMarca(): void {
    this.marcaService.atualizar(this.marca).subscribe(() => {
      this.geralService.snackBarMensagem(`A marca ${this.marca.nome} foi atualizada com sucesso!`)
      this.router.navigate(['/marcas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }

}
