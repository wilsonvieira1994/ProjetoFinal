import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  template: `
    <button mat-raised-button (click)="navegarCreate()" color="accent">
      Nova Faq
    </button>
    <app-faq-read></app-faq-read>
  `,
  styles: [`
  button{
    margin: 15px 0  15px 85%;
  }
  `]
})
export class FaqComponent implements OnInit {
  
  rotaPadrao = '/faq'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCreate(): void {
    this.router.navigate([`${this.rotaPadrao}/create`])
  }
}
