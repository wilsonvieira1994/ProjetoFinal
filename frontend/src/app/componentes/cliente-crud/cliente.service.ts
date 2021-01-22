import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  rotaPadrao = '/clientes'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.rotaBackend}/${id}`)
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.rotaBackend, cliente)
  }

  atualizar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.rotaBackend}/${cliente.id}`, cliente)
  }

  deletar(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.rotaBackend}/${id}`)
  }

}

