import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento',
  template: `
  <button mat-raised-button (click)="navegarCreate()" color="accent">
    Nova Forma de Pagamento
  </button>
  <app-forma-pagamento-read></app-forma-pagamento-read>
`,
styles: [`
button{
  margin: 15px 0  15px 85%;
}
`]
})
export class FormaPagamentoComponent implements OnInit {
  rotaPadrao = '/formaspagamento'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }

}