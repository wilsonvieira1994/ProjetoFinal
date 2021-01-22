import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  template: `
    <button mat-raised-button (click)="navegarCreate()" color="accent">
      Nova Categoria
    </button>
    <app-categoria-read></app-categoria-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class CategoriaComponent implements OnInit {

  rotaPadrao = '/categorias'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}
