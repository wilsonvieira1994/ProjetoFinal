import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../../geral.service';
import { Marca } from '../marca.module';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-delete',
  template: `
    <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Deletar Marca</mat-card-title>
        <span>Nome: {{marca.nome}}</span>
        <br>
        <span>Descrição: {{marca.descricao}}</span>
        <div class="centralizar">
          <button class="btn-vermelho" mat-raised-button (click)="deletarMarca()">
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
export class MarcaDeleteComponent implements OnInit {

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

  deletarMarca(): void {
    this.marcaService.deletar(`${this.marca.id}`).subscribe(() => {
      this.geralService.snackBarMensagem(`A marca ${this.marca.nome} foi excluída com sucesso!`)
      this.router.navigate(['/marcas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }

}