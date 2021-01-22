import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <mat-card>
    <div class="content">
      <mat-card-title class="centralizar-texto">Projeto Loja virtual</mat-card-title>
      <mat-card-content class="centralizar-texto">
        <h2>Lojas Wilson </h2>
        <h3>Desenvolvido por Wilson </h3>
      </mat-card-content>
      </div>
  </mat-card>
  `,
  styles: [`

  `]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
