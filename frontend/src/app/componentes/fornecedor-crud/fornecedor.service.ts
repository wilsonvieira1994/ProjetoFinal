import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor.module';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  rotaPadrao = '/fornecedores'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.rotaBackend}/${id}`)
  }

  criar(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.rotaBackend, fornecedor)
  }

  atualizar(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.put<Fornecedor>(`${this.rotaBackend}/${fornecedor.id}`, fornecedor)
  }

  deletar(id: string): Observable<Fornecedor>{
    return this.http.delete<Fornecedor>(`${this.rotaBackend}/${id}`)
  }

}

