import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from './marca.module';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  rotaPadrao = '/marcas'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Marca> {
    return this.http.get<Marca>(`${this.rotaBackend}/${id}`)
  }

  criar(marcas: Marca): Observable<Marca>{
    return this.http.post<Marca>(this.rotaBackend, marcas)
  }

  atualizar(marcas: Marca): Observable<Marca>{
    return this.http.put<Marca>(`${this.rotaBackend}/${marcas.id}`, marcas)
  }

  deletar(id: string): Observable<Marca>{
    return this.http.delete<Marca>(`${this.rotaBackend}/${id}`)
  }

}
