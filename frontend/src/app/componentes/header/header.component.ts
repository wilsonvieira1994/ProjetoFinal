import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <a routerLink="/" class="logo">
        <i class="material-icons">
            store
        </i>
        Lojas Wilson
      </a>
      <div class="espacamento">
        <a routerLink="/categorias">
          Categorias
        </a>
        <a routerLink="/clientes">
          Clientes
        </a>
        <a routerLink="/faq">
          Faq
        </a>
        <a routerLink="/formaspagamento">
          Formas de Pagamento
        </a>
        <a routerLink="/fornecedores">
          Fornecedores
        </a>
        <a routerLink="/itensvendas">
          Itens das Vendas
        </a>
        <a routerLink="/marcas">
          Marcas
        </a>
        <a routerLink="/produtos">
          Produtos
        </a>
        <a routerLink="/vendas">
          Vendas
        </a>
      </div>
      
    </mat-toolbar>
  `,
  styles: [`
    a{
      display: flex;
      align-items: center;
    }

    .logo i {
      font-size: 60px;
    }

    .espacamento {
      display: flex;
      margin-left: auto;
    }

    .espacamento a {
      margin-left: 15px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
