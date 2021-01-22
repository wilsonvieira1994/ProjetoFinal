import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  rotaPadrao = '/produtos'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.rotaBackend}/${id}`)
  }

  criar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.rotaBackend, produto)
  }

  atualizar(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.rotaBackend}/${produto.id}`, produto)
  }

  deletar(id: string): Observable<Produto>{
    return this.http.delete<Produto>(`${this.rotaBackend}/${id}`)
  }

}
