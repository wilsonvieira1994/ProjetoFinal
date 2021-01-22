import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  template: `
    <button mat-raised-button (click)="navegarCreate()" color="accent">
      Novo Cliente
    </button>
    <app-cliente-read></app-cliente-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class ClienteComponent implements OnInit {
  
  rotaPadrao = '/clientes'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}