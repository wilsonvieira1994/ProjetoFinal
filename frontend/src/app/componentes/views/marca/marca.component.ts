import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca',
  template: `
<button mat-raised-button (click)="navegarCreate()" color="accent">
      Nova Marca
    </button>
    <app-marca-read></app-marca-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class MarcaComponent implements OnInit {
  
  rotaPadrao = '/marcas'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}
