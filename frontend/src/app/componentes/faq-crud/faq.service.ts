import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from './faq.module';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  rotaPadrao = '/faq'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Faq[]>{
    return this.http.get<Faq[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Faq> {
    return this.http.get<Faq>(`${this.rotaBackend}/${id}`)
  }

  criar(faq: Faq): Observable<Faq>{
    return this.http.post<Faq>(this.rotaBackend, faq)
  }

  atualizar(faq: Faq): Observable<Faq>{
    return this.http.put<Faq>(`${this.rotaBackend}/${faq.id}`, faq)
  }

  deletar(id: string): Observable<Faq>{
    return this.http.delete<Faq>(`${this.rotaBackend}/${id}`)
  }

}