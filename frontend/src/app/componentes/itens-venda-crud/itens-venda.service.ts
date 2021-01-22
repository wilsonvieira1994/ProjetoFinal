import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItensVenda } from './itens-venda.module';

@Injectable({
  providedIn: 'root'
})
export class ItensVendaService {
  rotaPadrao = '/itensvendas'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<ItensVenda[]>{
    return this.http.get<ItensVenda[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<ItensVenda> {
    return this.http.get<ItensVenda>(`${this.rotaBackend}/${id}`)
  }

  criar(venda: ItensVenda): Observable<ItensVenda>{
    return this.http.post<ItensVenda>(this.rotaBackend, venda)
  }

}
