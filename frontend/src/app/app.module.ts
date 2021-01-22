import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/views/inicio/inicio.component';
import { CategoriaCreateComponent } from './componentes/categoria-crud/categoria-create/categoria-create.component';
import { CategoriaComponent } from './componentes/views/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { CategoriaReadComponent } from './componentes/categoria-crud/categoria-read/categoria-read.component';
import { MatTableModule } from '@angular/material/table';
import { CategoriaUpdateComponent } from './componentes/categoria-crud/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './componentes/categoria-crud/categoria-delete/categoria-delete.component';
import { ClienteComponent } from './componentes/views/cliente/cliente.component';
import { ClienteCreateComponent } from './componentes/cliente-crud/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './componentes/cliente-crud/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './componentes/cliente-crud/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './componentes/cliente-crud/cliente-delete/cliente-delete.component';
import { FormaPagamentoComponent } from './componentes/views/forma-pagamento/forma-pagamento.component';
import { FormaPagamentoCreateComponent } from './componentes/forma-pagamento-crud/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoReadComponent } from './componentes/forma-pagamento-crud/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoUpdateComponent } from './componentes/forma-pagamento-crud/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './componentes/forma-pagamento-crud/forma-pagamento-delete/forma-pagamento-delete.component';
import { FornecedorComponent } from './componentes/views/fornecedor/fornecedor.component';
import { FornecedorCreateComponent } from './componentes/fornecedor-crud/fornecedor-create/fornecedor-create.component';
import { FornecedorReadComponent } from './componentes/fornecedor-crud/fornecedor-read/fornecedor-read.component';
import { FornecedorUpdateComponent } from './componentes/fornecedor-crud/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './componentes/fornecedor-crud/fornecedor-delete/fornecedor-delete.component';
import { MarcaComponent } from './componentes/views/marca/marca.component';
import { MarcaCreateComponent } from './componentes/marca-crud/marca-create/marca-create.component';
import { MarcaReadComponent } from './componentes/marca-crud/marca-read/marca-read.component';
import { MarcaUpdateComponent } from './componentes/marca-crud/marca-update/marca-update.component';
import { MarcaDeleteComponent } from './componentes/marca-crud/marca-delete/marca-delete.component';
import { ProdutoComponent } from './componentes/views/produto/produto.component';
import { ProdutoCreateComponent } from './componentes/produto-crud/produto-create/produto-create.component';
import { ProdutoReadComponent } from './componentes/produto-crud/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './componentes/produto-crud/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './componentes/produto-crud/produto-delete/produto-delete.component';
import { FaqComponent } from './componentes/views/faq/faq.component';
import { FaqCreateComponent } from './componentes/faq-crud/faq-create/faq-create.component';
import { FaqReadComponent } from './componentes/faq-crud/faq-read/faq-read.component';
import { FaqUpdateComponent } from './componentes/faq-crud/faq-update/faq-update.component';
import { FaqDeleteComponent } from './componentes/faq-crud/faq-delete/faq-delete.component';
import { VendaComponent } from './componentes/views/venda/venda.component';
import { VendaReadComponent } from './componentes/venda-crud/venda-read/venda-read.component';
import { VendaDeleteComponent } from './componentes/venda-crud/venda-delete/venda-delete.component';
import { ItensVendaComponent } from './componentes/views/itens-venda/itens-venda.component';
import { ItensVendaReadComponent } from './componentes/itens-venda-crud/itens-venda-read/itens-venda-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    CategoriaComponent,
    CategoriaCreateComponent,
    CategoriaReadComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    ClienteComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    FormaPagamentoComponent,
    FormaPagamentoCreateComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoUpdateComponent,
    FormaPagamentoDeleteComponent,
    FornecedorComponent,
    FornecedorCreateComponent,
    FornecedorReadComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent,
    MarcaComponent,
    MarcaCreateComponent,
    MarcaReadComponent,
    MarcaUpdateComponent,
    MarcaDeleteComponent,
    ProdutoComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    FaqComponent,
    FaqCreateComponent,
    FaqReadComponent,
    FaqUpdateComponent,
    FaqDeleteComponent,
    VendaComponent,
    VendaReadComponent,
    VendaDeleteComponent,
    ItensVendaComponent,
    ItensVendaReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
