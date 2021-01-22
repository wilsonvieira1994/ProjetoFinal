import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormaPagamento } from './forma-pagamento.module';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
  rotaPadrao = '/formaspagamento'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<FormaPagamento[]>{
    return this.http.get<FormaPagamento[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<FormaPagamento> {
    return this.http.get<FormaPagamento>(`${this.rotaBackend}/${id}`)
  }

  criar(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.post<FormaPagamento>(this.rotaBackend, formaPagamento)
  }

  atualizar(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.put<FormaPagamento>(`${this.rotaBackend}/${formaPagamento.id}`, formaPagamento)
  }

  deletar(id: string): Observable<FormaPagamento>{
    return this.http.delete<FormaPagamento>(`${this.rotaBackend}/${id}`)
  }

}