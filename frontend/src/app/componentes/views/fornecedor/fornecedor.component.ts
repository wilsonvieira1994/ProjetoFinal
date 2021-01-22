import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  template: `
<button mat-raised-button (click)="navegarCreate()" color="accent">
      Novo Fornecedor
    </button>
    <app-fornecedor-read></app-fornecedor-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class FornecedorComponent implements OnInit {
  rotaPadrao = '/fornecedores'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}