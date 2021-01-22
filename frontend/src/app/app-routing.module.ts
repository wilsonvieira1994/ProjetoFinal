import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './componentes/categoria-crud/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './componentes/categoria-crud/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './componentes/categoria-crud/categoria-update/categoria-update.component';
import { ClienteCreateComponent } from './componentes/cliente-crud/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './componentes/cliente-crud/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './componentes/cliente-crud/cliente-update/cliente-update.component';
import { FaqCreateComponent } from './componentes/faq-crud/faq-create/faq-create.component';
import { FaqDeleteComponent } from './componentes/faq-crud/faq-delete/faq-delete.component';
import { FaqUpdateComponent } from './componentes/faq-crud/faq-update/faq-update.component';
import { FormaPagamentoCreateComponent } from './componentes/forma-pagamento-crud/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './componentes/forma-pagamento-crud/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './componentes/forma-pagamento-crud/forma-pagamento-update/forma-pagamento-update.component';
import { FornecedorCreateComponent } from './componentes/fornecedor-crud/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from './componentes/fornecedor-crud/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './componentes/fornecedor-crud/fornecedor-update/fornecedor-update.component';
import { MarcaCreateComponent } from './componentes/marca-crud/marca-create/marca-create.component';
import { MarcaDeleteComponent } from './componentes/marca-crud/marca-delete/marca-delete.component';
import { MarcaUpdateComponent } from './componentes/marca-crud/marca-update/marca-update.component';
import { ProdutoCreateComponent } from './componentes/produto-crud/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './componentes/produto-crud/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './componentes/produto-crud/produto-update/produto-update.component';
import { VendaDeleteComponent } from './componentes/venda-crud/venda-delete/venda-delete.component';
import { CategoriaComponent } from './componentes/views/categoria/categoria.component';
import { ClienteComponent } from './componentes/views/cliente/cliente.component';
import { FaqComponent } from './componentes/views/faq/faq.component';
import { FormaPagamentoComponent } from './componentes/views/forma-pagamento/forma-pagamento.component';
import { FornecedorComponent } from './componentes/views/fornecedor/fornecedor.component';
import { InicioComponent } from './componentes/views/inicio/inicio.component';
import { ItensVendaComponent } from './componentes/views/itens-venda/itens-venda.component';
import { MarcaComponent } from './componentes/views/marca/marca.component';
import { ProdutoComponent } from './componentes/views/produto/produto.component';
import { VendaComponent } from './componentes/views/venda/venda.component';

const routes: Routes = [
  {
  path: "",
  component: InicioComponent
  }, {
    path: "categorias",
    component:CategoriaComponent
  }, {
    path: "categorias/create",
    component:CategoriaCreateComponent
  }, {
    path: "categorias/update/:id",
    component:CategoriaUpdateComponent
  }, {
    path: "categorias/delete/:id",
    component:CategoriaDeleteComponent
  }, {
    path: "clientes",
    component:ClienteComponent
  }, {
    path: "clientes/create",
    component:ClienteCreateComponent
  }, {
    path: "clientes/update/:id",
    component:ClienteUpdateComponent
  }, {
    path: "clientes/delete/:id",
    component:ClienteDeleteComponent
  }, {
    path: "formaspagamento",
    component:FormaPagamentoComponent
  }, {
    path: "formaspagamento/create",
    component:FormaPagamentoCreateComponent
  }, {
    path: "formaspagamento/update/:id",
    component:FormaPagamentoUpdateComponent
  }, {
    path: "formaspagamento/delete/:id",
    component:FormaPagamentoDeleteComponent
  }, {
    path: "fornecedores",
    component:FornecedorComponent
  }, {
    path: "fornecedores/create",
    component:FornecedorCreateComponent
  }, {
    path: "fornecedores/update/:id",
    component:FornecedorUpdateComponent
  }, {
    path: "fornecedores/delete/:id",
    component:FornecedorDeleteComponent
  }, {
    path: "marcas",
    component:MarcaComponent
  }, {
    path: "marcas/create",
    component:MarcaCreateComponent
  }, {
    path: "marcas/update/:id",
    component:MarcaUpdateComponent
  }, {
    path: "marcas/delete/:id",
    component:MarcaDeleteComponent
  }, {
    path: "produtos",
    component:ProdutoComponent
  }, {
    path: "produtos/create",
    component:ProdutoCreateComponent
  }, {
    path: "produtos/update/:id",
    component:ProdutoUpdateComponent
  }, {
    path: "produtos/delete/:id",
    component:ProdutoDeleteComponent
  }, {
    path: "faq",
    component:FaqComponent
  }, {
    path: "faq/create",
    component:FaqCreateComponent
  }, {
    path: "faq/update/:id",
    component:FaqUpdateComponent
  }, {
    path: "faq/delete/:id",
    component:FaqDeleteComponent
  }, {
    path: "vendas",
    component:VendaComponent
  }, {
    path: "vendas/delete/:id",
    component:VendaDeleteComponent
  }, {
    path: "itensvendas",
    component:ItensVendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
