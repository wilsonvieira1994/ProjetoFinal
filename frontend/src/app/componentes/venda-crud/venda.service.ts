import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from './venda.module';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  rotaPadrao = '/vendas'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Venda> {
    return this.http.get<Venda>(`${this.rotaBackend}/${id}`)
  }

  criar(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(this.rotaBackend, venda)
  }

  deletar(id: string): Observable<Venda>{
    return this.http.delete<Venda>(`${this.rotaBackend}/${id}`)
  }

}
