import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  template: `
<button mat-raised-button (click)="navegarCreate()" color="accent">
      Novo Produto
    </button>
    <app-produto-read></app-produto-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class ProdutoComponent implements OnInit {
 
  rotaPadrao = '/produtos'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}
